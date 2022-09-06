
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  const units=await knex("units");
  const users=await knex('users');

  await knex('user_unit').del()
  await knex('user_unit').insert([
    { id_user: users[users.length-3].id,id_unit:units[units.length-1].id},
    { id_user: users[users.length-2].id,id_unit:units[units.length-2].id},
    { id_user: users[users.length-1].id,id_unit:units[units.length-3].id},    
  ]);
};
