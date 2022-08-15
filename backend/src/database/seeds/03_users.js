/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  const images = await knex('images');
  let imagesTam=images.length;
  await knex('users').del()
  await knex('users').insert([
    { 
      name:"josinaldo viana",
      nameuser:"VianaNaldo",
      email:"josinaldo@gmail.com",	
      password:123456,
      id_image:images[imagesTam-1].id,
      id_company:null,
      id_creator:null     
    },
    { 
      name:"marcus vinicius",
      nameuser:"ViniciusMarcus",
      email:"Marcus@gmail.com",	
      password:123456, 
      id_image:images[imagesTam-2].id,
      id_company:null,
      id_creator:null 
    },
    { 
      name:"victor melo",
      nameuser:"MeloVictor",
      email:"victor@gmail.com",	
      password:123456,
      id_image:images[imagesTam-3].id,
      id_company:null,
      id_creator:null   
    },
    
  ]);
};
