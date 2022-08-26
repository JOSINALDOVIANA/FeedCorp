export function up(knex) {
    return  knex.schema.alterTable('users', function (table) {
        table.integer("id_creator").unsigned();
        table.integer("id_company").unsigned();
        table.integer("id_permission").unsigned();
        table.foreign("id_creator").references("id").inTable("users").onDelete("cascade");
        table.foreign("id_permission").references("id").inTable("permissions").onDelete("set null");
        table.foreign("id_company").references("id").inTable("companies").onDelete("cascade");
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("");
};