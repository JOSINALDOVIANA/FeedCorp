

 export function up(knex) {
    return  knex.schema.createTable('categoryquestion', function (table) {
        table.increments('id'); 
        table.string("category");        
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));       
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("categoryquestion");
};