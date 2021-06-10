const { knex } = require('../db/conn')

exports.addUser = async newUser => {
    return await knex('Users')
        .insert(newUser);
}

exports.editUser = async (id, editedUser) => {
    return await knex('Users')
        .where({id})
        .update(editedUser);  
}

exports.deleteUser = async id => {
    return await knex('Users')
        .where({id})
        .del()
}