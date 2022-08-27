/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex) {
    return  knex.schema.createTable('item_answer_user', function (table) {
        table.increments('id');  
        table.string('answer').notNullable();

        table.integer('id_item').notNullable().unsigned();
        table.integer("id_user").unsigned();
       
        table.foreign("id_item").references("id").inTable("items").onDelete("cascade");
        table.foreign("id_user").references("id").inTable("users").onDelete("set null");            
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("item_answer_user");
};