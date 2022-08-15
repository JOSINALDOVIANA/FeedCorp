
 export function up(knex) {
    return  knex.schema.createTable('countries', function (table) {
        table.increments('id');
        table.string("country").notNullable();                     
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("countries");
};