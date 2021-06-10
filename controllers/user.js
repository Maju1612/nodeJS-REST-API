const userService = require('../services/user')
const { createToken } = require('../services/jwt')

exports.loginUser = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const result = await createToken(email, password)

    res.send(result)
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