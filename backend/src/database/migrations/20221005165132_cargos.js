
export function up(knex) {
    return  knex.schema.createTable('positions', function (table) {
        table.increments('id');
        table.string('office');
        table.integer("id_user").unsigned();        
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade");
        table.integer("id_company").unsigned();        
        table.foreign("id_company").references("id").inTable("companies").onDelete("cascade");
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};


export function down(knex) {
  return knex.schema.dropTableIfExists('positions');
};
