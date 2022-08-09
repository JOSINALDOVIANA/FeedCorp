/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return  knex.schema.createTable('ebr_results', function (table) {
        table.increments('id');  
        table.string('answer').notNullable();

        table.integer('id_ebr_items').notNullable().unsigned();
        table.integer("id_user").unsigned();
        table.integer("id_ebr").unsigned().notNullable();

        table.foreign("id_ebr").references("id").inTable("evaluation_by_results").onDelete("cascade");   
        table.foreign("id_ebr_items").references("id").inTable("ebr_items").onDelete("cascade");
        table.foreign("id_user").references("id").inTable("users").onDelete("set null");            
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("ebr_results");
};