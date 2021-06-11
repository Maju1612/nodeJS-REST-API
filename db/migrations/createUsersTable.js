exports.up = function(knex, Promise) {
    return knex.schema.createTable('Users', function (table) {
        table.string('id', 36).notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('createdAt').notNullable();
        table.timestamp('updatedAt').notNullable();
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Users');
}