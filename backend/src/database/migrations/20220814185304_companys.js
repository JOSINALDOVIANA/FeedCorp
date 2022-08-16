
 export function up(knex) {
    return  knex.schema.createTable('companies', function (table) {
        table.increments('id');
        table.integer("id_state").unsigned();           
        table.foreign("id_state").references("id").inTable("states").onDelete("set null");
        table.integer("id_country").unsigned();           
        table.foreign("id_country").references("id").inTable("countries").onDelete("set null");
        table.integer("id_city").unsigned();           
        table.foreign("id_city").references("id").inTable("cities").onDelete("set null");
        table.integer("id_plan").unsigned();           
        table.foreign("id_plan").references("id").inTable("plans").onDelete("set null");
        table.string("namefantasy").notNullable();
        table.string("cnpj").notNullable();
        table.string("postcard").notNullable();
                    
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("companies");
};