/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return  knex.schema.createTable('evaluation_by_results', function (table) {
        table.increments('id');  
        table.string('title').notNullable();
        table.dateTime('validity',{precision:6}).notNullable();
        // table.boolean('status').defaultTo('true');
        table.integer("id_user").unsigned().notNullable();        
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade");        
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("evaluation_by_results");
};