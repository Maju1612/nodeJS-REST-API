exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Users1', function (table) {
        table.string('id', 36).notNullable().primary();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('createdAt').notNullable();
        table.timestamp('updatedAt').notNullable();
    })
    .createTable('Posts1', function (table) {
        table.string('id', 36).notNullable().primary();
        table.string('author', 36).notNullable().references('id').inTable('Users');
        table.string('title').notNullable();
        table.string('lead').notNullable();
        table.string('content').notNullable();
        table.timestamp('createdAt').notNullable();
        table.timestamp('updatedAt').notNullable();
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Users1').dropTable('Posts1');
}