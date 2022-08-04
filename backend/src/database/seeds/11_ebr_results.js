
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  const users=await knex("users");
  const ebr=await knex('evaluation_by_results');
  const ebr_items=await knex('evaluation_by_results');

  await knex('ebr_results').del()
  await knex('ebr_results').insert([
    {id_ebr:ebr[ebr.length-1].id,id_user:users[users.length-1].id,id_ebr_items:ebr_items[ebr_items.length-1].id,answer:"1.5"},        
  ]);
};
