export function up(knex) {
    return  knex.schema.createTable('feedbacks', function (table) {
        table.increments('id');
        table.integer("id_user").unsigned();           
        table.integer("id_unity").unsigned();
        table.integer("id_company").unsigned().notNullable();
        table.integer("id_direction").unsigned();
        table.integer("id_type").unsigned();
        table.foreign("id_user").references("id").inTable("users").onDelete("set null");
        table.foreign("id_unity").references("id").inTable("units").onDelete("set null");
        table.foreign("id_company").references("id").inTable("companies").onDelete("cascade");
        table.foreign("id_direction").references("id").inTable("users").onDelete("set null");
        table.foreign("id_type").references("id").inTable("typesfeedbacks").onDelete("set null");
        table.string("feedback").notNullable();
        table.boolean("anonymous").defaultTo(false);
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("feedbacks");
};
