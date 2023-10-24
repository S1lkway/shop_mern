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
    throw new Error(error)
  }
})

//* desc GET Menu Sections
//* route GET /api/menu_sections
//* access Private
const getMenuSections = asyncHandler(async (req, res) => {

})

//* desc EDIT Menu Section
//* route PUT /api/menu_sections/:id
//* access Private
const editMenuSection = asyncHandler(async (req, res) => {

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