/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return  knex.schema.createTable('user_permission', function (table) {
        table.increments('id');        
        table.integer("id_user").unsigned().notNullable();
        table.integer("id_permission").unsigned().notNullable();
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade");   
        table.foreign("id_permission").references("id").inTable("permissions").onDelete("cascade");   
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("user_permission");
};
