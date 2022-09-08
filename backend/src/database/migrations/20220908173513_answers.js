

 export function up(knex) {
    return  knex.schema.createTable('answers', function (table) {
        table.increments('id'); 
        table.string("answer").notNullable();
        table.integer('id_user').unsigned().notNullable();
        table.foreign("id_user").references("id").inTable("users").onDelete("cascade");
        table.boolean("anonymous").defaultTo(false)
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));       
       
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("answers");
};