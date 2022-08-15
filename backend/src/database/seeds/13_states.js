import axios from 'axios';
 export async function seed(knex) {
  const country=await knex("countries");
  // console.log(country);
  const states=await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
  const ufInitials = states.data.map(uf => { return { initials: uf.sigla, state: uf.nome,id_country:country[0].id} }); 
  await knex('states').del();
  await knex('states').insert(ufInitials);
};