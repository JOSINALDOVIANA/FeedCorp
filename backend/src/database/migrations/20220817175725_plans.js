
 export function up(knex) {
    return  knex.schema.createTable('plans', function (table) {
        table.increments('id');
       
        table.string("plan").notNullable();
       
        table.double("value").notNullable();
                    
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("plans");
};