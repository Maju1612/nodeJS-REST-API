const express = require('express');
const userController = require('../controllers/user')

const router = express.Router();

//add user
router.post('/add', userController.addUser);
//edit user
router.put('/edit/:id', userController.editUser);
//delete user
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;