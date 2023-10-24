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

router.route('/').get(protect, admin, getMenuSections).post(protect, admin, upload.array('images', 1), createMenuSection)
router.route('/:id').get(protect, admin, getMenuSection).delete(protect, admin, deleteMenuSection).put(protect, admin, upload.array('images', 1), editMenuSection)

module.exports = router