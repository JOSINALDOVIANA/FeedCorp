
 export function up(knex) {
    return  knex.schema.createTable('user_ebr', function (table) {
        table.increments('id');         
        
       
        table.integer("id_user").unsigned().notNullable();
        table.integer("id_ebr").unsigned().notNullable();

        table.foreign("id_ebr").references("id").inTable("evaluation_by_results").onDelete("cascade");   
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade"); 
                    
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("user_ebr");
};