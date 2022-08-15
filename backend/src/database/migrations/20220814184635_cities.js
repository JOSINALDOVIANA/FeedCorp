
 export function up(knex) {
    return  knex.schema.createTable('cities', function (table) {
        table.increments('id');
        table.integer("id_state").unsigned().notNullable();           
        table.foreign("id_state").references("id").inTable("states").onDelete("cascade");
        table.string("city").notNullable();        
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("cities");
};
