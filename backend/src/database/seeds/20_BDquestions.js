
 export async function seed(knex) {
 

  await knex('BDQuestions').del();
  await knex('BDQuestions').insert([
    { question:"como você se sente nesta tarde?"},
    { question:"como você se sente neste dia?"},
    { question:"como você se sente nesta manhâ?"},
    { question:"como você se sente hoje?"},
    { question:"qual o seu nivel de humor?"},
       
  ]);
};