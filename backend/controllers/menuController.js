const asyncHandler = require('express-async-handler')
const path = require('path');
const fs = require('fs');
const Menu = require('../models/menuModel')
const uploadFolderPath = path.join(__dirname, '../uploads/menuUploads')

//* desc CREATE MenuItem
//* route POST /api/menu
//* access Private
const createMenuItem = asyncHandler(async (req, res) => {

})

//* desc GET MenuItems
//* route GET /api/menu
//* access Private
const getMenuItems = asyncHandler(async (req, res) => {

})

//* desc EDIT MenuItem
//* route PUT /api/menu/:id
//* access Private
const editMenuItem = asyncHandler(async (req, res) => {

})

//* desc GET OneItem
//* route GET /api/menu/:id
//* access Private
const getMenuItem = asyncHandler(async (req, res) => {

})

//* desc DELETE MenuItem
//* route POST /api/menu/:id
//* access Private
const deleteMenuItem = asyncHandler(async (req, res) => {

})



module.exports = {
  getMenuItems,
  createMenuItem,
  getMenuItem,
  editMenuItem,
  deleteMenuItem,
}