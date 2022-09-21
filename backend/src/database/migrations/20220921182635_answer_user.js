

 export function up(knex) {
    return  knex.schema.createTable('answer_user', function (table) {
        table.increments('id'); 
        table.integer("id_user").unsigned().notNullable();        
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade");
        table.integer("id_question").unsigned().notNullable();        
        table.foreign("id_question").references("id").inTable("pulse_question").onDelete("cascade");
        table.double("answer").notNullable();
        table.boolean("status").defaultTo(false);
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));       
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("answer_user");
};