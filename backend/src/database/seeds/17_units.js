

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  const users=await knex('users');
  const company=await knex('companies');
  let userstam=users.length;
  await knex('units').del();
  await knex('units').insert([
    { 
     description:"Unidade de Market e Comunicação",
     id_user:users[userstam-1].id,
     initials:"UMC",
     id_company:company[0].id
    },
    { 
     description:"Unidade de Tecnologia da Informação e Comunicação",
     id_user:users[userstam-2].id,
     initials:"UTIC",
     id_company:company[0].id
    },
    { 
     description:"Unidade de Assessoria e Comunicação",
     id_user:users[userstam-3].id,
     initials:"UAC",
     id_company:company[0].id
    },
    { 
     description:"Unidade de Controle e Contabilidade",
     id_user:users[userstam-1].id,
     initials:"UCC" ,
     id_company:company[0].id
    },
    
    
  ]);
};
