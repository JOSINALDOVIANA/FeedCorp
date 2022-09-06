export function up(knex) {
    return  knex.schema.alterTable('units', function (table) {
        table.integer("id_company").unsigned();        
        table.foreign("id_company").references("id").inTable("companies").onDelete("cascade");
      })
};

export function down(knex) {
  return knex.schema.alterTable("units",function (table){
      table.dropForeign("id_company");
      table.dropColumn("id_company");
  })
};


