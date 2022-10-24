export function up(knex) {
    return  knex.schema.alterTable('item_answer_user', function (table) {
        table.double("result").defaultTo(0);        
       
        
        
      })
};

export function down(knex) {
  return knex.schema.alterTable("item_answer_user",function (table){   
   
      table.dropColumn("result");
  })
};