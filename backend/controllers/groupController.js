const asyncHandler = require('express-async-handler')
const path = require('path');
const fs = require('fs');
const MenuSection = require('../models/menuSectionModel')

//* desc CREATE Group
//* route POST /api/menu_sections/:id/groups
//* access Private (x-www-form-urlencoded)
const createGroup = asyncHandler(async (req, res) => {
  const groupName = req.body.name
  /// Create Group
  try {
    const menuSection = await MenuSection.findById(req.params.id)
    if (!menuSection) {
      res.status(400)
      throw new Error('Menu section is not found')
    }
    if (!groupName) {
      res.status(400)
      throw new Error('Name of group is empty')

    }
    const checkGroup = menuSection.extraIngredientTypes?.find((group) => group.name === groupName);
    if (checkGroup) {
      res.status(400)
      throw new Error('Group with this name is already exist')
    }
    menuSection.extraIngredientTypes?.push({ name: groupName })
    await menuSection.save()
    res.status(200).json(menuSection)
  } catch (error) {
    res.status(404)
    throw new Error(error)
  }
})

//* desc EDIT Group
//* route PUT /api/menu_sections/:id/groups:groupId
//* access Private
const editGroup = asyncHandler(async (req, res) => {
  ///CONSTS
  const sectionId = req.params.id
  // console.log('sectionId - ' + sectionId)
  if (!sectionId) {
    res.status(404)
    throw new Error('There is no ID of section')
  }
  const groupId = req.params.groupId
  // console.log('groupId - ' + groupId)
  if (!groupId) {
    res.status(404)
    throw new Error('There is no ID of group')
  }
  const groupNewName = req.body.name
  // console.log('groupNewName - ' + groupNewName)
  if (!groupNewName) {
    res.status(404)
    throw new Error('There is no new name for group')
  }
  ///ACTIONS
  try {
    //Get menu section
    const menuSection = await MenuSection.findById(req.params.id)
    if (!menuSection) {
      res.status(400)
      throw new Error('Menu section is not found')
    }
    //Check existing of newName
    const checkGroup = menuSection.extraIngredientTypes?.find((group) => group.name === groupNewName);
    if (checkGroup) {
      res.status(400)
      throw new Error('Group with this name is already exist')
    }
    menuSection.extraIngredientTypes = menuSection.extraIngredientTypes?.map((group) => {
      if (group._id.toString() === groupId) {
        return { ...group, name: groupNewName };
      }
      return group;
    })

    await menuSection.save()

    res.status(200).json(menuSection)
  } catch (error) {
    res.status(404)
    throw new Error(error)
  }
})

//* desc DELETE Group
//* route DELETE /api/menu_sections/:id/groups:groupId
//* access Private
const deleteGroup = asyncHandler(async (req, res) => {
  const groupId = req.params.groupId

  try {
    const menuSection = await MenuSection.findById(req.params.id)
    if (!menuSection) {
      res.status(400)
      throw new Error('Menu section is not found')
    }

    const groupIndex = menuSection.extraIngredientTypes?.findIndex((group) => group._id.toString() === groupId)
    if (groupIndex === -1) {
      res.status(400)
      throw new Error("Section doesn't have that group")
    }

    /// Delete files attached to group
    menuSection.extraIngredientTypes[groupIndex].ingredients?.forEach((ingredient) => {
      const imagePath = path.join(__dirname, '../uploads/menuUploads', ingredient.image?.filename)

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
      }
    })
    /// Delete group from MongoDB
    menuSection.extraIngredientTypes = menuSection.extraIngredientTypes.filter((group) => group._id.toString() !== groupId);

    await menuSection.save();

    res.status(200).json(menuSection)
  } catch (error) {
    res.status(404)
    throw new Error(error)
  }
})

module.exports = {
  createGroup,
  editGroup,
  deleteGroup,
}