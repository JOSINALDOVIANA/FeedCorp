
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
      email:"admin03@opclient.com",	
      password:123456,
      id_image:images[imagesTam-1].id,
      id_company:null,
      id_creator:null,
      id_permission:permissions[permissions.length-1].id   
    },
    { 
      name:"marcus vinicius",
      nameuser:"ViniciusMarcus",
      email:"admin02@opclient.com",	
      password:123456, 
      id_image:images[imagesTam-2].id,
      id_company:null,
      id_creator:null,
      id_permission:permissions[permissions.length-2].id   
    },
    { 
      name:"victor melo",
      nameuser:"MeloVictor",
      email:"admin01@opclient.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null,
      id_permission:permissions[permissions.length-3].id     
    },
    
  ]);
};
