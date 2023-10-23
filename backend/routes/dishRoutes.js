const express = require('express')
const router = express.Router()
const upload = require('../middleware/filesMiddleware');
const {
  getDishes,
  createDish,
  getDish,
  editDish,
  deleteDish
} = require('../controllers/dishController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getDishes).post(protect, upload.array('images', 1), createDish)
router.route('/:id').get(protect, getDish).delete(protect, deleteDish).put(protect, upload.array('images', 1), editDish)

module.exports = router