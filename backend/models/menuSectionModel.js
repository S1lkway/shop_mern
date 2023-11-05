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


const ingredientSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name for ingredient']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price for ingredient']
  },
  description: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    required: [true, 'Please add a category for ingredient'],
  },
  image: {
    type: imageSchema,
  },
});


const extraIngredientTypeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name of ingredient type']
  },
  ingredients: {
    type: [ingredientSchema],
  },
});


const menuSectionSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name of menu section'],
    unique: [true, 'Section with this name is already exist'],
  },
  description: {
    type: String,
    default: null,
  },
  activeInMenu: {
    type: Boolean,
    default: false,
  },
  extraIngredientTypes: {
    type: [extraIngredientTypeSchema],
  },
},
  {
    timestamps: true
  })

module.exports = mongoose.model('MenuSection', menuSectionSchema)