

 export function up(knex) {
    return  knex.schema.createTable('pulse_unity', function (table) {
        table.increments('id'); 
        table.integer("id_unity").unsigned().notNullable();        
        table.foreign("id_unity").references("id").inTable("units").onDelete("cascade");
        table.integer("id_pulse").unsigned().notNullable();        
        table.foreign("id_pulse").references("id").inTable("pulses").onDelete("cascade");        
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));       
      })
};

export function down(knex) {
  return knex.schema.dropTableIfExists("pulse_unity");
};