const express = require('express')
const usersController = require('../controllers/users')
const { checkJwt } = require('../middleware')
const router = express.Router()
const checkJWt = require('../middleware/index')

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.post('/', checkJWt.checkJwt, usersController.createUser)

router.put('/:id', checkJWt.checkJwt, usersController.updateUserById)

router.delete('/:first_name', checkJWt.checkJwt, usersController.deleteUserByFirstName)

module.exports = router