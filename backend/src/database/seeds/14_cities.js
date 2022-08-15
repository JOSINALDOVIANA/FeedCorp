import axios from 'axios';
 export async function seed(knex) {
  const states=await knex("states");
  let cities=[];
  
  for (const estado of states) {
    // console.log(estado)
       const municipios = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.initials}/municipios`);
       for (const municipio of municipios.data) {
        // console.log(municipio)
           cities.push({city:municipio.nome,id_state:estado.id})
       }
    }
  
  
  // console.log(cities)
 
  await knex('cities').del();
  await knex('cities').insert(cities);
};