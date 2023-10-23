const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  originalname: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

const menuItemSchema = mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Please add a category']
  },
  image: {
    type: imageSchema,
  },
  name: {
    type: String,
    required: [true, 'Please add a name of menu item']
  },
  description: {
    type: String,
    required: [true, 'Please add a description of menu item']
  },
  price: {
    type: String,
    required: [true, 'Please add price for menu item']
  },
  type: {
    type: String,
  },
  Popular: {
    type: Boolean,
  },
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Menu', menuItemSchema)