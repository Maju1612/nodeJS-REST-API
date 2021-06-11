const uuid = require('uuid');
const moment = require('moment')

const userRes = require('../repositories/user')

exports.addUser = async newUser => {
    const mysqlTimestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    newUser.createdAt = mysqlTimestamp
    newUser.updatedAt = mysqlTimestamp
    newUser.id = uuid.v4();

    return userRes.addUser(newUser)
}

exports.editUser = async (id, editedUser) => {
    editedUser.updatedAt = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    return userRes.editUser(id, editedUser)
}

exports.deleteUser = async id => {
   return userRes.deleteUser(id)
}