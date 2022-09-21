
 export async function seed(knex) {
 

  await knex('typesfeedbacks').del();
  await knex('typesfeedbacks').insert([
    { type:"Sugestões"},
    { type:"Criticas"},
    { type:"Elogios"},       
  ]);
};