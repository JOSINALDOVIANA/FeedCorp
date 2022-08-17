

 export function up(knex) {
    return  knex.schema.createTable('company_module', function (table) {
        table.increments('id');
       
        table.integer("id_company").unsigned();           
        table.foreign("id_company").references("id").inTable("companies").onDelete("cascade");
        table.integer("id_module").unsigned();           
        table.foreign("id_module").references("id").inTable("modules").onDelete("cascade");
                    
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("company_module");
};
