
export async function seed(knex) {
  // Deletes ALL existing entries
  const images = await knex('images');
  const permissions = await knex('permissions');
  let imagesTam=images.length;
  await knex('users').del()
  await knex('users').insert([
    { 
      name:"josinaldo viana",
      nameuser:"VianaNaldo",
      email:"gestor@gmail.com",	
      password:123456,
      id_image:images[imagesTam-1].id,
      id_company:null,
      id_creator:null,
      id_permission:permissions[permissions.length-1].id,
      id_office:null  
    },
    { 
      name:"marcus vinicius",
      nameuser:"ViniciusMarcus",
      email:"colaborador@gmail.com",	
      password:123456, 
      id_image:images[imagesTam-2].id,
      id_company:null,
      id_creator:null,
      id_permission:permissions[permissions.length-2].id,
      id_office:null   
    },
    { 
      name:"victor melo",
      nameuser:"MeloVictor",
      email:"admin@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:permissions[permissions.length-3].id,
      id_office:null      
    },
    
  ]);
};
