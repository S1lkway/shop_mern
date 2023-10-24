const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const admin = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      //Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      if (req.user.admin) {
        next()
      } else {
        console.log(error)
        res.status(401)
        throw new Error('User is not an admin')
      }

    } catch (error) {
      //401 - no authorized
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { admin }