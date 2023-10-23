const asyncHandler = require('express-async-handler')
const path = require('path');
const fs = require('fs');
const Dish = require('../models/dishModel')
const uploadFolderPath = path.join(__dirname, '../uploads/menuUploads')

//* desc CREATE Dish
//* route POST /api/dishes
//* access Private
const createDish = asyncHandler(async (req, res) => {

})

//* desc GET Dishes
//* route GET /api/dishes
//* access Private
const getDishes = asyncHandler(async (req, res) => {

})

//* desc EDIT Dish
//* route PUT /api/dishes/:id
//* access Private
const editDish = asyncHandler(async (req, res) => {

})

//* desc GET OneDish
//* route GET /api/dishes/:id
//* access Private
const getDish = asyncHandler(async (req, res) => {

})

//* desc DELETE Dish
//* route POST /api/dishes/:id
//* access Private
const deleteDish = asyncHandler(async (req, res) => {

})



module.exports = {
  getDishes,
  createDish,
  getDish,
  editDish,
  deleteDish,
}