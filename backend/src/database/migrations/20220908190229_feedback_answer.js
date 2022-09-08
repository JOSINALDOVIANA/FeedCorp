

 export function up(knex) {
    return  knex.schema.createTable('feedback_answer', function (table) {
        table.increments('id'); 
        table.integer("id_feedback").unsigned().notNullable();
        table.integer('id_answer').unsigned().notNullable();
        table.foreign("id_feedback").references("id").inTable("feedbacks").onDelete("cascade");
        table.foreign("id_answer").references("id").inTable("answers").onDelete("cascade");
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));       
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("feedback_answer");
};