

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  const users=await knex('users');
  let userstam=users.length;
  await knex('units').del();
  await knex('units').insert([
    { 
     description:"UMC",id_user:users[userstam-1].id    
    },
    { 
     description:"UTIC",id_user:users[userstam-2].id
    },
    { 
     description:"UAC",id_user:users[userstam-3].id
    },
    { 
     description:"UCC",id_user:users[userstam-1].id 
    },
    
    
  ]);
};
