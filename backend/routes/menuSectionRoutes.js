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

const { protect } = require('../middleware/authMiddleware')
const { admin } = require('../middleware/adminMiddleware')

/// Sections
router.route('/').get(getMenuSections).post(protect, admin, createMenuSection)
router.route('/:id').get(protect, admin, getMenuSection).delete(protect, admin, deleteMenuSection).put(protect, admin, editMenuSection)
/// Groups
// router.route('/:id/groups').get(protect, admin, getGroups).post(protect, admin, createGroup)
// router.route('/:id/groups/:groupId').get(protect, admin, getGroup).delete(protect, admin, deleteGroup).put(protect, admin, editGroup)
// /// Dishes
// router.route('/:id/groups/:groupId/dishes').get(protect, admin, getDishes).post(protect, admin, upload.array('images', 1), createDish)
// router.route('/:id/groups/:groupId/dishes/:dishId').get(protect, admin, getDishe).delete(protect, admin, deleteDish).put(protect, admin, upload.array('images', 1), editDish)

module.exports = router