
 export async function seed(knex) {
  // Deletes ALL existing entries
  const city=await knex('cities').where({city:"Macapá"});
  const estado=await knex("states").where({initials:"AP"});
  const pais=await knex('countries');
  await knex('companies').del()
  await knex('companies').insert([
    { 
       id_country:pais[0].id,
       id_state:estado[0].id,
       id_city:city[0].id,
       namefantasy:"SEBRAE",
       cnpj:"02215489863",
       postcard:"68909818",

    }
    
    
  ]);
};
