/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return  knex.schema.createTable('images', function (table) {
        table.string('id').primary().notNullable();
        table.string('name').notNullable();
        table.string('key').notNullable();
        table.string('size').notNullable();
        table.string('url').notNullable();      
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      });

      
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('images');
};
