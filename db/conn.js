const dotenv = require('dotenv')
dotenv.config()

exports.knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  }
});