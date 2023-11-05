const express = require('express')
const router = express.Router()
const upload = require('../middleware/filesMiddleware');
const {
  getMenuSections,
  createMenuSection,
  getMenuSection,
  editMenuSection,
  deleteMenuSection
} = require('../controllers/menuSectionController')
const {
  createGroup,
  getGroups,
  editGroup,
  getGroup,
  deleteGroup,
} = require('../controllers/groupController')
const {
  createIngredient,
  // editIngredient
} = require('../controllers/ingredientController')

const { protect } = require('../middleware/authMiddleware')
const { admin } = require('../middleware/adminMiddleware')

/// Sections
router.route('/').get(getMenuSections).post(protect, admin, createMenuSection)
router.route('/:id').get(protect, admin, getMenuSection).delete(protect, admin, deleteMenuSection).put(protect, admin, editMenuSection)
/// Groups
router.route('/:id/groups').get(protect, admin, getGroups).post(protect, admin, createGroup)
router.route('/:id/groups/:groupId').get(protect, admin, getGroup).delete(protect, admin, deleteGroup).put(protect, admin, editGroup)
// /// Ingredients
router.route('/:id/groups/:groupId/ingredients').post(protect, admin, upload.array('images', 1), createIngredient)
// router.route('/:id/groups/:groupId/ingredients/:ingredientId').get(protect, admin, getIngredient).delete(protect, admin, deleteIngredient).put(protect, admin, upload.array('images', 1), editIngredient)

module.exports = router