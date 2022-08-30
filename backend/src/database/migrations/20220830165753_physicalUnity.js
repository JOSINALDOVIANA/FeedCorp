
 export function up(knex) {
    return  knex.schema.createTable('physicalUnity', function (table) {
        table.increments('id');  
        table.string('unity').notNullable();    
               
       
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("physicalUnity");
};