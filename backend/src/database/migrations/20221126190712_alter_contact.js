export function up(knex) {
    return  knex.schema.alterTable('contact', function (table) {
        table.boolean("status").defaultTo(false);        
                
       
        
        
      })
};

export function down(knex) {
  return knex.schema.alterTable("contact",function (table){   
   
      table.dropColumn("status");
    
  })
};