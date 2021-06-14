exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Users', function (table) {
        table.uuid('id').notNullable().primary();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('createdAt').notNullable();
        table.timestamp('updatedAt').notNullable();
    })
    .createTable('Posts', function (table) {
        table.uuid('id').notNullable().primary();
        table.uuid('author').notNullable().references('id').inTable('Users');
        table.string('title').notNullable();
        table.string('lead').notNullable();
        table.string('content').notNullable();
        table.timestamp('createdAt').notNullable();
        table.timestamp('updatedAt').notNullable();
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Users').dropTable('Posts');
}