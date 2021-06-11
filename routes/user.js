const express = require('express');
const userController = require('../controllers/user')
const { authToken } = require('../middleware/auth')

const { body } = require('express-validator');

const router = express.Router();

//login user
router.get('/login',
    userController.loginUser
);
//add user
router.post('/add',
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
    userController.addUser
);
//edit user
router.put('/edit',
    authToken,
    body('password').isLength({ min: 8 }),
    userController.editUser
);
//delete user
router.delete('/delete',
    authToken,
    userController.deleteUser
);

module.exports = router;