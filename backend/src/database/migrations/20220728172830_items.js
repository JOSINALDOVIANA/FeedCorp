/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return  knex.schema.createTable('items', function (table) {
        table.increments('id');  
        table.string('indicator').notNullable();
        table.string('goal').notNullable();
        table.integer("id_ebr").unsigned().notNullable();
        table.string("und");        
        table.boolean("max").defaultTo(false);        
        table.boolean("min").defaultTo(false);        
               
        table.foreign("id_ebr").references("id").inTable("evaluation_by_results").onDelete("cascade");           
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("items");
};