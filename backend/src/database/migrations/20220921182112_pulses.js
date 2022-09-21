

 export function up(knex) {
    return  knex.schema.createTable('pulses', function (table) {
        table.increments('id'); 
        table.integer("id_user").unsigned().notNullable();
        table.integer('id_company').unsigned().notNullable();
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade");
        table.foreign("id_company").references("id").inTable("companies").onDelete("cascade");
        table.string("title").notNullable();
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));       
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("pulses");
};