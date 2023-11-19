const asyncHandler = require('express-async-handler')
const path = require('path');
const fs = require('fs');
const MenuSection = require('../models/menuSectionModel')

//* desc CREATE Ingredient
//* route POST /api/menu_sections/:id/groups/:groupId/ingredients
//* access Private (form-data)
const createIngredient = asyncHandler(async (req, res) => {
  ///CONSTS
  const file = req.files[0]
  const groupId = req.params.groupId
  const ingredientnName = req.body.name
  if (!ingredientnName || ingredientnName.trim() === '') {
    res.status(400)
    throw new Error('Name is empty')
  }
  const price = req.body.price
  if (!price || price === 0) {
    res.status(400)
    throw new Error('Price is empty}')
  }
  const category = req.body.category
  if (!category || category.trim() === '') {
    res.status(400)
    throw new Error('Category is empty')
  }

  ///ACTIONS
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

    menuSection.extraIngredientTypes[groupIndex]?.ingredients?.push({
      name: ingredientnName,
      price: price,
      description: (req.body.description && req.body.description.length > 0) ? req.body.description : null,
      category: category,
      image: file
    })
    await menuSection.save();
    // console.log(menuSection)
    res.status(200).json(menuSection)
  } catch (error) {
    res.status(404)
    throw new Error(error)
  }
})

//* desc EDIT Ingredient
//* route POST /api/menu_sections/:id/groups/:groupId/ingredients/:ingredientId
//* access Private (x-www-form-urlencoded)
const editIngredient = asyncHandler(async (req, res) => {

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

    res.status(200).json(menuSection)
  } catch (error) {
    res.status(404)
    throw new Error(error)
  }
})

//* desc DELETE Ingredient
//* route DELETE /api/menu_sections/:id/groups/:groupId/ingredients/:ingredientId
//* access Private
const deleteIngredient = asyncHandler(async (req, res) => {
  const groupId = req.params.groupId
  const ingredientId = req.params.ingredientId

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
    // console.log('Group index - ' + groupIndex)

    const ingredientIndex = menuSection.extraIngredientTypes[groupIndex].ingredients?.findIndex((ingredient) => ingredient._id.toString() === ingredientId)
    if (ingredientIndex === -1) {
      res.status(400)
      throw new Error("Group doesn't have that ingredient")
    }
    // console.log('Ingredient index - ' + ingredientIndex)

    /// Delete files attached to article
    const imagePath = path.join(__dirname, '../uploads/menuUploads', menuSection.extraIngredientTypes[groupIndex].ingredients[ingredientIndex].image.filename)
    // console.log(imagePath)
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath)
    }
    ///Delete article data from MongoDB
    menuSection.extraIngredientTypes.forEach((group) => {
      group.ingredients = group.ingredients.filter((ingredient) => ingredient._id.toString() !== ingredientId);
    });

    await menuSection.save();

    res.status(200).json(menuSection)
  } catch (error) {
    res.status(404)
    throw new Error(error)
  }
})

module.exports = {
  createIngredient,
  editIngredient,
  deleteIngredient,
}