const express = require('express')

const userRoute = express.Router()
const userController = require('../controller/user-controller')

userRoute.post('/login',userController.validateUserLogin)
userRoute.post('/register',userController.registerUser)

module.exports = userRoute;