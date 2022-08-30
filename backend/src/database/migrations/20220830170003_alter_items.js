export function up(knex) {
    return  knex.schema.alterTable('items', function (table) {
        table.integer("id_physicalUnity").unsigned(); 
        
        
        table.foreign("id_physicalUnity").references("id").inTable("physicalUnity").onDelete("set null");
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("");
};