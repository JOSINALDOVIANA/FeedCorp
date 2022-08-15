
 export function up(knex) {
    return  knex.schema.createTable('states', function (table) {
        table.increments('id');
        table.integer("id_country").unsigned().notNullable();           
        table.foreign("id_country").references("id").inTable("countries").onDelete("cascade");
        table.string("state").notNullable();
        table.string("initials").notNullable();
                    
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("states");
};
