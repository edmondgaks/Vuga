const express = require('express');
const router = express.Router()

const userController = require('./controllers/userController');

router.get('/', userController.home)
router.get('/index', userController.index)
router.post('/register', userController.register)


module.exports = router;