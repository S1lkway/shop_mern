const asyncHandler = require('express-async-handler')

const admin = asyncHandler(async (req, res, next) => {

  try {
    if (req.user.admin !== true) {
      res.status(401);
      throw new Error('User is not an admin');
    }

    next();
  } catch (error) {
    res.status(401)
    throw new Error('User is not an admin');
  }
})

module.exports = { admin }