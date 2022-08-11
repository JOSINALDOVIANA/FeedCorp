
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  const units=await knex("units");
  const users=await knex('users');

  await knex('evaluation_by_results').del()
  await knex('evaluation_by_results').insert([
    { id_user: users[users.length-1].id,title:'Atendimento'},        
  ]);
};
