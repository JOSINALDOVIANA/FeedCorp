
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
    { id_user: users[users.length-10].id,id_unit:units[units.length-1].id},
    { id_user: users[users.length-9].id,id_unit:units[units.length-2].id},
    { id_user: users[users.length-8].id,id_unit:units[units.length-3].id},    
    { id_user: users[users.length-7].id,id_unit:units[units.length-4].id},
    { id_user: users[users.length-6].id,id_unit:units[units.length-1].id},
    { id_user: users[users.length-5].id,id_unit:units[units.length-2].id},    
    { id_user: users[users.length-4].id,id_unit:units[units.length-3].id},
    { id_user: users[users.length-3].id,id_unit:units[units.length-4].id},
    { id_user: users[users.length-2].id,id_unit:units[units.length-1].id},    
    { id_user: users[users.length-1].id,id_unit:units[units.length-2].id},
        
  ]);
};
