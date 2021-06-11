exports.up = function(knex, Promise) {
    return knex.schema.createTable('Posts', function (table) {
        table.string('id', 36).notNullable();
        table.string('author', 36).notNullable();
        table.string('title').notNullable();
        table.string('lead').notNullable();
        table.string('content').notNullable();
        table.timestamp('createdAt').notNullable();
        table.timestamp('updatedAt').notNullable();
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Posts');
}