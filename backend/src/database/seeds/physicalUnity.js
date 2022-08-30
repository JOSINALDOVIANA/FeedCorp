
export async function seed(knex) {
  // Deletes ALL existing entries
  const images = await knex('images');
  const permissions = await knex('physicalUnity');
  let imagesTam=images.length;
  await knex('physicalUnity').del()
  await knex('physicalUnity').insert([
    { 
       unity:"segundo" 
    },   
    { 
       unity:"minuto" 
    },   
    { 
       unity:"hora" 
    },   
    { 
       unity:"centimetro" 
    },   
    { 
       unity:"semana" 
    },   
    { 
       unity:"mês" 
    },   
    { 
       unity:"metro" 
    },   
    { 
       unity:"ano" 
    },   
   
    
  ]);
};
