const { knex } = require('../db/conn')


exports.createToken = async (email, password) => {
    const user = await knex('Users').where('email', email).first()

    if (!user || password !== user.password) 
        return('Username or password incorrect')
        
    return user.id
}