
 export async function seed(knex) {
  // Deletes ALL existing entries
  const company=await knex('companies');
 const users=await knex('users');
  for (const user of users) {
    await knex('users').update(
      { 
         "id_company":company[0].id
  
      }
      
      
    ).where({"id":user.id});
  }
  
}