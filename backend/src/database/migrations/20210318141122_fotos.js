export function up(knex) {
    return knex.schema.createTable('fotos', function (table) {
        table.string('idfoto').primary().notNullable();

        table.string('name').notNullable();
        table.string('size').notNullable();
        table.string('key').notNullable();
        table.string('url').notNullable();
        // table.timestamp('created_at',{ precision: 6 },{ useTz: true }).defaultTo(knex.fn.now(6));
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
        // table.string('dia');
        // table.string('mes');
        // table.string('ano');


    });
}

export function down(knex) {
    knex.schema.dropTable('fotos');
}