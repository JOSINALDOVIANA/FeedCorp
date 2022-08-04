/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  const permissions=await knex("permissions");
  const users=await knex('users');

  await knex('user_permission').del()
  await knex('user_permission').insert([
    { id_user: users[users.length-3].id,id_permission:permissions[permissions.length-1].id},
    { id_user: users[users.length-2].id,id_permission:permissions[permissions.length-2].id},
    { id_user: users[users.length-1].id,id_permission:permissions[permissions.length-3].id},    
  ]);
};
