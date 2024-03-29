
 export function up(knex) {
    return  knex.schema.createTable('okrs', function (table) {
        table.increments('id');
        table.integer("id_user").unsigned().notNullable();           
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade");
        table.string("objective").notNullable();
        table.double("progress");
        table.datetime('validity', { precision: 6 }).defaultTo(knex.fn.now(6));
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("okrs");
};