const express = require('express');
const router = express.Router()

const userController = require('./controllers/userController');

router.get('/', userController.home)
router.get('/home', userController.index)
router.get('/login', userController.login)
router.post('/checkUser',userController.checkUser)
router.get('/register', userController.register)
router.post('/saveUser', userController.saveUser)


module.exports = router;