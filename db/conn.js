const {client, connection} = require('../knexfile')

exports.knex = require('knex')({
  client,
  connection
});