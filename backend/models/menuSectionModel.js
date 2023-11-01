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
    required: [true, 'Please add a name of ingredient']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price of ingredient']
  },
  description: {
    type: String,
  },
  category: {
    type: Number,
    required: [true, 'Please add a category of ingredient'],
    default: 'Standart',
  },
  image: {
    type: imageSchema,
  },
});

//Toppings
const extraIngredientTypeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name of ingredient type']
  },
  ingredients: {
    type: [ingredientSchema],
  },
});

//Pizza
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