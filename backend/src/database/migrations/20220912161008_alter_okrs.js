export function up(knex) {
    return  knex.schema.alterTable('okrs', function (table) {
        table.datetime('concluded').defaultTo(null);  
        
        
      })
};

export function down(knex) {
  return knex.schema.alterTable("okrs",function (table){   
    table.dropColumn("concluded");
  })
};