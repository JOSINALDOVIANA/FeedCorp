export function up(knex) {
    return  knex.schema.alterTable('feedbacks', function (table) {
        table.string('name').defaultTo(null);  
        
        
      })
};

export function down(knex) {
  return knex.schema.alterTable("feedbacks",function (table){
   
    table.dropColumn("name");
  })
};