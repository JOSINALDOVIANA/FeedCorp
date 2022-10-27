export function up(knex) {
    return  knex.schema.alterTable('feedbacks', function (table) {
        table.boolean("ext").defaultTo(false);        
        table.string("phone").defaultTo(null);        
       
        
        
      })
};

export function down(knex) {
  return knex.schema.alterTable("feedbacks",function (table){   
   
      table.dropColumn("ext");
      table.dropColumn("phone");
  })
};
