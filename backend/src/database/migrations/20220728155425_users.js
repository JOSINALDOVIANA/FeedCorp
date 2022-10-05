
export function up(knex) {
    return  knex.schema.createTable('users', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('nameuser').notNullable();
        table.string('email').unique().notNullable();
        table.string('password');
        table.string('id_image').defaultTo("null");
        table.foreign('id_image').references('id').inTable('images').onDelete("SET NULL");
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};


export function down(knex) {
  return knex.schema.dropTableIfExists('users');
};
