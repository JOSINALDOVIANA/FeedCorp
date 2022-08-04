/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('permissions').del()
  await knex('permissions').insert([
    { description: 'administrador'},
    { description: 'gestor'},
    { description: 'colaborador'},   
  ]);
};
