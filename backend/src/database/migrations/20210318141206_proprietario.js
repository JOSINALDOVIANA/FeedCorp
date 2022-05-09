
export function up(knex) {
    return knex.schema.createTable('proprietario', function (table) {
        table.string('idprop').primary().notNullable();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('cpf').notNullable().unique();
        table.string('rg').notNullable().unique();
        table.string('pais').notNullable();
        table.string('estado').notNullable();
        table.string('cidade').notNullable();
        table.string('bairro').notNullable();
        table.string('rua').notNullable();
        table.string('numero').notNullable();
        table.string('cep').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable().unique();
        table.string('senha').notNullable();
        table.string('id_foto').defaultTo('null');
        table.foreign('id_foto').references('idfoto').inTable('fotos').onDelete('no action').onUpdate('cascade');
        table.string('status_reg').defaultTo('true');
        // table.timestamp('created_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
        // table.string('dia');
        // table.string('mes');
        // table.string('ano');


    });
}

export function down(knex) {
    knex.schema.dropTable('proprietario');
}
