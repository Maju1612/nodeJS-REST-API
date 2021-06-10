const express = require('express');
const userController = require('../controllers/user')

const {authToken} = require('../services/jwt')

const router = express.Router();

//login user
router.get('/login', userController.loginUser);
//add user
router.post('/add', userController.addUser);
//edit user
router.put('/edit', authToken, userController.editUser);
//delete user
router.delete('/delete', authToken, userController.deleteUser);

module.exports = router;