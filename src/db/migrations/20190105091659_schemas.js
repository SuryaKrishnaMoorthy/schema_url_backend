
exports.up = function(knex, Promise) {
    return knex.schema.createTable('schemas', (table) => {
        table.increments()
        table.string('name').notNullable().defaultTo('')
        table.text('url').notNullable().defaultTo('')
        table.timestamps(true, true)
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(schemas)
};
