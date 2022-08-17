

 export function up(knex) {
    return  knex.schema.createTable('module_plan', function (table) {
        table.increments('id');
       
        table.integer("id_plan").unsigned();           
        table.foreign("id_plan").references("id").inTable("plans").onDelete("cascade");
        table.integer("id_module").unsigned();           
        table.foreign("id_module").references("id").inTable("modules").onDelete("cascade");
                    
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("module_plan");
};
