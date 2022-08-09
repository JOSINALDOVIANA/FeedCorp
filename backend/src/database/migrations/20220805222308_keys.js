
 export function up(knex) {
    return  knex.schema.createTable('keys', function (table) {
        table.increments('id');                  
        table.integer("id_okr").unsigned();        
        table.integer("id_user").unsigned();        
        table.foreign("id_okr").references("id").inTable("okrs").onDelete("cascade"); 
        table.foreign("id_user").references("id").inTable("users"); 
        table.string('description').notNullable();                    
        table.boolean('status').defaultTo(false);                    
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("keys");
};