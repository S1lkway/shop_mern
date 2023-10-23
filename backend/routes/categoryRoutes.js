const express = require('express')
const router = express.Router()
const upload = require('../middleware/filesMiddleware');
const {
  getCategories,
  createCategory,
  getCategory,
  editCategory,
  deleteCategory
} = require('../controllers/categoryController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getCategories).post(protect, createCategory)
router.route('/:id').get(protect, getCategory).delete(protect, deleteCategory).put(protect, editCategory)

module.exports = router