const userService = require('../services/user')
const { createToken } = require('../services/jwt')
const { validationResult } = require('express-validator');

exports.loginUser = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const result = await createToken(email, password)

    res.json(result)
}

exports.addUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;
    const password = req.body.password;

    const newUser = {
        email,
        password,
    }
    
    try {
        await userService.addUser(newUser)
        
        res.json({success: true })
    } catch (err) {
        res.json({success: false})
    }
}

exports.editUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const id = req.body.userId
    const password = req.body.password;
    
    const editedUser = {
        password,
    }

    try {
        await userService.editUser(id, editedUser)

        res.json({success: true })
    } catch (err) {
        res.json({success: false})
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.body.userId

    try {
        await userService.deleteUser(id)

        res.json({success: true })
    } catch (err) {
        res.json({success: false})
    }
}