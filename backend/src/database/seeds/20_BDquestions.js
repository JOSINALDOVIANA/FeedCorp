
 export async function seed(knex) {
 
  
  await knex('BDQuestions').del();
  await knex('BDQuestions').insert([
    { question:"como você se sente nesta tarde?","id_cat":null},
    { question:"como você se sente neste dia?","id_cat":null},
    { question:"como você se sente nesta manhâ?","id_cat":null},
    { question:"como você se sente hoje?","id_cat":null},
    { question:"qual o seu nivel de humor?","id_cat":null},
       
  ]);
};