/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return  knex.schema.createTable('unit_ebr', function (table) {
        table.increments('id');         
        
       
        table.integer("id_unit").unsigned().notNullable();
        table.integer("id_ebr").unsigned().notNullable();

        table.foreign("id_ebr").references("id").inTable("evaluation_by_results").onDelete("cascade");   
        table.foreign("id_unit").references("id").inTable("units").onDelete("cascade"); 
                    
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("unit_ebr");
};