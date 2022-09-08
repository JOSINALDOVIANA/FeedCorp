

 export function up(knex) {
    return  knex.schema.createTable('typesfeedbacks', function (table) {
        table.increments('id');  
        table.string('type').notNullable();          
       
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("typesfeedbacks");
};