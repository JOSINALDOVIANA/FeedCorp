
export function up(knex) {
  return knex.schema.createTable('categorias', function (table) {
    table.increments('idcategoria');
    table.string('cat', 75).notNullable().unique();
    // table.string('status_reg',1).defaultValue('1');

    // table.timestamp('created_at',{ precision: 6 },{ useTz: true }).defaultTo(knex.fn.now(6));
     table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
    // table.string('dia');
    // table.string('mes');
    // table.string('ano');
  });
}

export function down(knex) {
  knex.schema.dropTable('categorias');
}
