
 export async function seed(knex) {
 
  
  await knex('categoryquestion').del();
  await knex('categoryquestion').insert([
    { category:"Bem estar"},
    { category:"Produtividade"},
    { category:"Conectividade com lideres e colegas"},
    
       
  ]);
};