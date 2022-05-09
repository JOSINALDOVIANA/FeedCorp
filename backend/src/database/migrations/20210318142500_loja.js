
export function up(knex) {
    return knex.schema.createTable('loja', function (table) {
        table.string('idloja').primary().notNullable();
        table.string('nomefantasia').notNullable();
        table.string('cnpj').notNullable().unique();
        table.string('pais').notNullable();
        table.string('estado').notNullable();
        table.string('cidade').notNullable();
        table.string('bairro').notNullable();
        table.string('rua').notNullable();
        table.string('numero').notNullable();
        table.string('cep').notNullable();
        table.string('telefone');
        table.string('email');
        table.string('senha');
        table.string('site');
        table.string('id_foto');
        table.string('id_prop').notNullable();
        table.foreign('id_foto').references('idfoto').inTable('fotos').onDelete('no action').onUpdate('cascade');
        table.foreign('id_prop').references('idprop').inTable('proprietario').onDelete('cascade').onUpdate('cascade');
        table.string('status_reg').defaultTo('true');
        // table.timestamp('created_at',{ precision: 6 },{ useTz: true }).defaultTo(knex.fn.now(6));
         table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
        // table.string('dia');
        // table.string('mes');
        // table.string('ano');


    });
}

export function down(knex) {
    knex.schema.dropTable('loja');
}
