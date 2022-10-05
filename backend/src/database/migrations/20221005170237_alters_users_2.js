export function up(knex) {
    return  knex.schema.alterTable('users', function (table) {
        table.integer("id_office").unsigned();      
        table.foreign("id_office").references("id").inTable("positions").onDelete("cascade");
       
      })
};

export function down(knex) {
  return knex.schema.alterTable("users",function(table){
    table.dropForeign("id_office")
    
    table.dropColumns(["id_office"]);
  })
};