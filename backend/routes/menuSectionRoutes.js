const express = require('express')
const router = express.Router()
const upload = require('../middleware/filesMiddleware');
const {
  getMenuSections,
  createMenuSection,
  editMenuSection,
  deleteMenuSection
} = require('../controllers/menuSectionController')
const {
  createGroup,
  editGroup,
  deleteGroup,
} = require('../controllers/groupController')
const {
  createIngredient,
  deleteIngredient
} = require('../controllers/ingredientController')

const { protect } = require('../middleware/authMiddleware')
const { admin } = require('../middleware/adminMiddleware')

/// Sections
router.route('/').get(getMenuSections).post(protect, admin, createMenuSection)
router.route('/:id').delete(protect, admin, deleteMenuSection).put(protect, admin, editMenuSection)
/// Groups
router.route('/:id/groups').post(protect, admin, createGroup)
router.route('/:id/groups/:groupId').delete(protect, admin, deleteGroup).put(protect, admin, editGroup)
// /// Ingredients
router.route('/:id/groups/:groupId/ingredients').post(protect, admin, upload.array('images', 1), createIngredient)
router.route('/:id/groups/:groupId/ingredients/:ingredientId').delete(protect, admin, deleteIngredient)
// .put(protect, admin, upload.array('images', 1), editIngredient)

module.exports = router