
 export function up(knex) {
    return  knex.schema.createTable('okr_user', function (table) {
        table.increments('id');
        table.integer("id_user").unsigned().notNullable();           
        table.integer("id_okr").unsigned().notNullable();           
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade");
        table.foreign("id_okr").references("id").inTable("okrs").onDelete("cascade");                       
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("okr_user");
};