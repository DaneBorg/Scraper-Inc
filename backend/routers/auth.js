const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()
const checkJWt = require('../middleware/index')

// router.post('/signup', authController.signup)

router.post('/login', checkJWt.checkJwt, authController.login)

module.exports = router