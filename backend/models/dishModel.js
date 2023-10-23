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

const sizeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Standart',
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const ownAdditionOptionSchema = mongoose.Schema({
  name: {
    type: String,
  },
});

const dishSchema = mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Please add a category']
  },
  image: {
    type: imageSchema,
  },
  name: {
    type: String,
    required: [true, 'Please add a name of dish']
  },
  description: {
    type: String,
    required: [true, 'Please add a description of dish']
  },
  sizes: {
    type: [sizeSchema],
    required: [true, 'Please add minimum one size of dish']
  },
  additionOptions: {
    type: [ownAdditionOptionSchema],
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

module.exports = mongoose.model('Dish', dishSchema)