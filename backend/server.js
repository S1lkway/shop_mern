const express = require('express')
const path = require('path');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

const app = express()

//* PATH TO GET IMAGES FROM BACKEND TO FRONTEND
/* We make absolute path to folder with files */
const menuUploadsPath = path.join(__dirname, 'uploads', 'menuUploads');
/* Set path on frontend that will use backend path in menuUploadsPath */
app.use('/uploads/menuUploads', express.static(menuUploadsPath));

//* MIDDLEWARES
/* Used to parse incoming requests with JSON payloads */
app.use(express.json())
/* Used to parse incoming requests with URL-encoded payloads 
The extended option determines how the URL-encoded data is parsed. When set to false, the data is parsed using the querystring*/
app.use(express.urlencoded({ extended: false }))

app.use('/images', express.static('frontend/public/images'));

//*  ROUTES  
// routes for registration, edit user and authorization
app.use('/api/users', require('./routes/userRoutes'))
// rotes for creating, deleting and edit menu categories
app.use('/api/menu_sections', require('./routes/menuSectionRoutes'))
// rotes for creating, deleting and edit menu items
app.use('/api/dishes', require('./routes/dishRoutes'))

/* Provides a basic error handling mechanism in Express that sends a JSON response with an error message and, optionally, the stack trace */
app.use(errorHandler)


connectDB().then(() => {
  app.listen(port, () => console.log(`Server started on port ${port}`.yellow.underline))
})

