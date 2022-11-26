
export function up(knex) {
    return  knex.schema.createTable('contact', function (table) {
        table.increments('id');
        table.string('name_user');
        table.string('surname_user');
        table.string('email_user');
        table.string('phone_user');

        table.string('name_companie');
        table.string('cnpj_companie');
        table.string('postcard_companie');
        table.string('address_companie');
        table.string('phone_companie');
        
        table.string('district_companie');
        

        table.integer("id_state").unsigned();        
        table.integer("id_country").unsigned();        
        table.integer("id_city").unsigned();        
        table.integer("id_plan").unsigned();        
        table.foreign("id_state").references("id").inTable("states").onDelete("set null");
        table.foreign("id_city").references("id").inTable("cities").onDelete("set null");
        table.foreign("id_country").references("id").inTable("countries").onDelete("set null");
        table.foreign("id_plan").references("id").inTable("plans").onDelete("set null");
              
        
        table.timestamp('updated_at',{ precision: 0 },{ useTz: true }).defaultTo(knex.fn.now(0));
      })
};


export function down(knex) {
  return knex.schema.dropTableIfExists('contact');
};
