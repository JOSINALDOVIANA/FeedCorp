
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  const images = await knex('images');
  const {id:amd} = await knex('permissions').where({description:"administrador"}).select("permissions.id").first();;
  const {id:gestor} = await knex('permissions').where({description:"gestor"}).select("permissions.id").first();;
  const {id:col} = await knex('permissions').where({description:"colaborador"}).select("permissions.id").first();;
  let imagesTam=images.length;
  await knex('users').del()
  await knex('users').insert([
    { 
      name:"Bruno Ataide",
      nameuser:"Sr. Bruno",
      email:"Bruno@gmail.com",	
      password:123456,
      id_image:images[imagesTam-1].id,
      id_company:null,
      id_creator:null,
      id_permission:amd,
      id_office:null  
    },
    { 
      name:"João Lucas",
      nameuser:"Sr João",
      email:"João@gmail.com",	
      password:123456, 
      id_image:images[imagesTam-2].id,
      id_company:null,
      id_creator:null,
      id_permission:col,
      id_office:null   
    },
    { 
      name:"Raimundo Nogueira",
      nameuser:"Sr Raimundo",
      email:"Raimundo@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:col,
      id_office:null      
    },
    { 
      name:"Nonato Lobato",
      nameuser:"Sr Nonato",
      email:"Nonato@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:col,
      id_office:null      
    },
    { 
      name:"Julio viana",
      nameuser:"Sr Julio",
      email:"Julio@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:col,
      id_office:null      
    },
    { 
      name:"Julio Farias",
      nameuser:"Sr Farias",
      email:"JulioF@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:col,
      id_office:null      
    },
    { 
      name:"Matheus Braga",
      nameuser:"Sr Mateus",
      email:"Mathues@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:col,
      id_office:null      
    },
    { 
      name:"Ana Maria",
      nameuser:"Sra Ana",
      email:"AnaMaria@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:col,
      id_office:null      
    },
    { 
      name:"Luciana Ferreira",
      nameuser:"Sra Luciana",
      email:"Luciana@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:gestor,
      id_office:null      
    },
    { 
      name:"Beatriz Braga",
      nameuser:"Sra Beatriz",
      email:"Beatriz@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:col,
      id_office:null      
    },
    
  ]);
};
