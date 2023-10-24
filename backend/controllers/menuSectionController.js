const asyncHandler = require('express-async-handler')
const path = require('path');
const fs = require('fs');
const MenuSection = require('../models/menuSectionModel')
const uploadFolderPath = path.join(__dirname, '../uploads/menuUploads')

//* desc CREATE Dish
//* route POST /api/dishes
//* access Private
const createMenuSection = asyncHandler(async (req, res) => {

})

//* desc GET Dishes
//* route GET /api/dishes
//* access Private
const getMenuSections = asyncHandler(async (req, res) => {

})

//* desc EDIT Dish
//* route PUT /api/dishes/:id
//* access Private
const editMenuSection = asyncHandler(async (req, res) => {

})

//* desc GET OneDish
//* route GET /api/dishes/:id
//* access Private
const getMenuSection = asyncHandler(async (req, res) => {

})

//* desc DELETE Dish
//* route POST /api/dishes/:id
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