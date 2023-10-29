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

const ingridientSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name of ingridient']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price of ingridient']
  },
  description: {
    type: String,
  },
  category: {
    type: Number,
    required: [true, 'Please add a category of ingridient'],
    default: 'Standart',
  },
  image: {
    type: imageSchema,
  },
});

//Toppings
const extraIngridientTypeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name of ingridient type']
  },
  ingridients: {
    type: [ingridientSchema],
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
  extraIngridientTypes: {
    type: [extraIngridientTypeSchema],
  },
},
  {
    timestamps: true
  })

module.exports = mongoose.model('MenuSection', menuSectionSchema)