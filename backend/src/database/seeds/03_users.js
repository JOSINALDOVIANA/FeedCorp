
export async function seed(knex) {
  // Deletes ALL existing entries
  const images = await knex('images');
  const permissions = await knex('permissions');
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
      id_permission:permissions[permissions.length-1].id,
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
      id_permission:permissions[permissions.length-2].id,
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
      id_permission:permissions[permissions.length-3].id,
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
      id_permission:permissions[permissions.length-1].id,
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
      id_permission:permissions[permissions.length-2].id,
      id_office:null      
    },
    
  ]);
};
