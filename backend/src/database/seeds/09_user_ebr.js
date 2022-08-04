
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  const users=await knex("users");
  const ebr=await knex('evaluation_by_results');

  await knex('user_ebr').del()
  await knex('user_ebr').insert([
    { id_user: users[users.length-2].id,id_ebr:ebr[ebr.length-1].id},        
  ]);
};
