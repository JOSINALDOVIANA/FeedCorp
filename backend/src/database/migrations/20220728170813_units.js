/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return  knex.schema.createTable('units', function (table) {
        table.increments('id'); 
        table.string('description').notNullable();
        table.string('initials').notNullable();
        table.integer("id_user").unsigned();        
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade");         
                 
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("units");
};
