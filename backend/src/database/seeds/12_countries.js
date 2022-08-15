
 export async function seed(knex) {
  await knex('countries').del()
  await knex('countries').insert({country:"Brasil"});
};
