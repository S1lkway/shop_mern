const express = require('express')
const router = express.Router()
const upload = require('../middleware/filesMiddleware');
const {
  getMenuItems,
  createMenuItem,
  getMenuItem,
  editMenuItem,
  deleteMenuItem
} = require('../controllers/menuController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getMenuItems).post(protect, upload.array('images', 1), createMenuItem)
router.route('/:id').get(protect, getMenuItem).delete(protect, deleteMenuItem).put(protect, upload.array('images', 1), editMenuItem)

module.exports = router