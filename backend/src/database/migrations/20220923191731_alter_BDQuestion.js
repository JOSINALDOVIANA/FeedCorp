export function up(knex) {
    return  knex.schema.alterTable('bdquestions', function (table) {
        table.integer("id_cat").unsigned();        
        table.foreign("id_cat").references("id").inTable("categoryquestion")  
        
        
      })
};

export function down(knex) {
  return knex.schema.alterTable("bdquestions",function (table){   
    table.dropForeign("id_cat");
      table.dropColumn("id_cat");
  })
};
