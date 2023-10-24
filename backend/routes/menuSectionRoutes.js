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

router.route('/').get(getMenuSections).post(protect, upload.array('images', 1), createMenuSection)
router.route('/:id').get(protect, getMenuSection).delete(protect, deleteMenuSection).put(protect, upload.array('images', 1), editMenuSection)

module.exports = router