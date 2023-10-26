const asyncHandler = require('express-async-handler')
const path = require('path');
const fs = require('fs');
const MenuSection = require('../models/menuSectionModel')
const uploadFolderPath = path.join(__dirname, '../uploads/menuUploads')

//* desc CREATE Menu Section
//* route POST /api/menu_sections
//* access Private
const createMenuSection = asyncHandler(async (req, res) => {
  /// Create Menu Section
  try {
    const menuSection = await MenuSection.create({
      name: req.body.name,
      description: req.body.description,
    })
    res.status(200).json(menuSection)
  } catch (error) {
    res.status(404)
    throw new Error('Section with this name is already exist')
  }
})

//* desc GET Menu Sections
//* route GET /api/menu_sections
//* access Private
const getMenuSections = asyncHandler(async (req, res) => {
  try {
    const menuSections = await MenuSection.find().sort({ name: 1 });
    res.status(200).json(menuSections)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }

})

//* desc EDIT Menu Section
//* route PUT /api/menu_sections/:id
//* access Private
const editMenuSection = asyncHandler(async (req, res) => {
  const extraIngridientTypes = req.body.extraIngridientTypes
  console.log(extraIngridientTypes)
  try {
    const menuSection = await MenuSection.findById(req.params.id)
    if (!menuSection) {
      res.status(400)
      throw new Error('Menu section is not found')
    }
    /// Basic edit fields
    menuSection.name = req.body.name;
    menuSection.description = (req.body.description && req.body.description.length > 0) ? req.body.description : null;

    /// Save the updated menu section
    const updatedMenuSection = await menuSection.save();
    res.status(200).json(updatedMenuSection)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

//* desc GET One Menu Section
//* route GET /api/menu_sections/:id
//* access Private
const getMenuSection = asyncHandler(async (req, res) => {

})

//* desc DELETE Menu Section
//* route POST /api/menu_sections/:id
//* access Private
const deleteMenuSection = asyncHandler(async (req, res) => {

})



module.exports = {
  getMenuSections,
  createMenuSection,
  getMenuSection,
  editMenuSection,
  deleteMenuSection,
}