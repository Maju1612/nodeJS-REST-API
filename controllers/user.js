const { knex } = require('../db/conn')
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const moment = require('moment')

const userService = require('../services/user')

exports.loginUser = async (req, res) => {
    const user = await knex('Users').where('email', req.body.email).first()

    if (!user || req.body.password !== user.password) {
        res.send('Username or password incorrect')
        return
    }
    const token = jwt.sign({'id':user.id}, process.env.TOKEN_SECRET, { expiresIn: '7d' });
    res.send(token)
}

exports.addUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = {
        email,
        password,
    }
    
    try {
        await userService.addUser(newUser)
        
        console.log(`Add user`)
        res.send(`Add user`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.editUser = async (req, res) => {
    const id = req.body.userId
    const email = req.body.email;
    const password = req.body.password;
    
    const editedUser = {
        email,
        password,
    }

    try {
        await userService.editUser(id, editedUser)

        console.log(`Update user with id ${id}`)
        res.send(`Update user with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.body.userId

    try {
        await userService.deleteUser(id)

        console.log(`Delete user with id ${id}`)
        res.send(`Delete user with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}