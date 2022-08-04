
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  const units=await knex("units");
  const ebr=await knex('evaluation_by_results');

  await knex('unit_ebr').del()
  await knex('unit_ebr').insert([
    { id_unit: units[units.length-1].id,id_ebr:ebr[ebr.length-1].id},        
  ]);
};
