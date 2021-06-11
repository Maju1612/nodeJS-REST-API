const dotenv = require('dotenv')
dotenv.config()

const {client, connection} = require('../knexfile')

exports.knex = require('knex')({
  client,
  connection
});