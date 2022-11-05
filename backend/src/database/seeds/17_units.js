

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  const {id:perm}=await knex('permissions').where({description:"administrador"}).first("description").select("permissions.id");
  const {id:id_user}=await knex('users').where({id_permission:perm}).first("id_permission").select("users.id");
  const {id:id_company}=await knex('companies').first().select("companies.id");
 
  await knex('units').del();
  await knex('units').insert([
    { 
     description:"Unidade de Market e Comunicação",
     id_user,
     initials:"UMC",
     id_company
    },
    { 
     description:"Unidade de Tecnologia da Informação e Comunicação",
     id_user,
     initials:"UTIC",
     id_company
    },
    { 
     description:"Unidade de Assessoria e Comunicação",
     id_user,
     initials:"UAC",
     id_company
    },
    { 
     description:"Unidade de Controle e Contabilidade",
     id_user,
     initials:"UCC" ,
     id_company
    },
    
    
  ]);
};
