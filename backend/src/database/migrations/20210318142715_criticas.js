
export function up(knex) {
    return knex.schema.createTable('criticas', function (table) {
        table.increments('idcritica');
        table.string('id_loja').notNullable();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email');
        table.string('telefone').notNullable();
        table.integer('id_cat').unsigned();
        table.string('coment', 1000).notNullable();
        table.foreign('id_loja').references('idloja').inTable('loja').onDelete('cascade').onUpdate('cascade');
        table.foreign('id_cat').references('idcategoria').inTable('categorias').onDelete('no action').onUpdate('cascade');
        table.string('status_reg').defaultTo('true');
        // table.timestamp('created_at',{ precision: 6 },{ useTz: true }).defaultTo(knex.fn.now(6));
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
        // table.string('dia');
        // table.string('mes');
        // table.string('ano');


    });
}

export function down(knex) {
    knex.schema.dropTable('usuarios');
}
