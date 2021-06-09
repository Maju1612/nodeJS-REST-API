const { knex } = require('../db/conn')
const uuid = require('uuid');
const moment = require('moment')

exports.addUser = async (req, res) => {
    const id = uuid.v4();
    const email = req.body.email;
    const password = req.body.password;
    const mysqlTimestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    
    try {
        await knex('Users')
            .insert({
                id,
                email,
                password,
                createdAt: mysqlTimestamp,
                updatedAt: mysqlTimestamp
            });
        console.log(`Add user with id ${id}`)
        res.send(`Add user with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.editUser = async (req, res) => {
    const id = req.params.id
    const email = req.body.email;
    const password = req.body.password;
    const updatedAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    try {
        await knex('Posts')
            .where({id})
            .update({
                email,
                password,
                updatedAt
            });
        console.log(`Update user with id ${id}`)
        res.send(`Update user with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}

exports.deleteUser = async (req, res) => {
    let id = req.params.id

    try {
        await knex('Posts')
            .where({id})
            .del()
        console.log(`Delete user with id ${id}`)
        res.send(`Delete user with id ${id}`)
    } catch (err) {
        console.error('Database error:', err);
        res.send(err.sqlMessage);
    }
}