
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  
  const ebr=await knex('evaluation_by_results');

  await knex('ebr_items').del()
  await knex('ebr_items').insert([
    {id_ebr:ebr[ebr.length-1].id,indicator:"tempo medio de atendimento",goal:'2',und:"min",tempo:true},        
  ]);
};
