const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  client: 'mysql2',
  connection: {
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  },
  migrations: {
    directory: './db/migrations'
  }
};
