
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
 
  const {id:produtividade} = await knex("categoryquestion").where({category:"Produtividade"}).first().select("categoryquestion.id");
  const {id:Conectividade} = await knex("categoryquestion").where({category:"Conectividade"}).first().select("categoryquestion.id");
  const {id:BemStar} = await knex("categoryquestion").where({category:"Bem estar"}).first().select("categoryquestion.id");
  await knex('bdquestions').del();
  await knex('bdquestions').insert([
    { question:"como você se sente nesta tarde?","id_cat":BemStar},
    { question:"como você se sente nesta manhã?","id_cat":BemStar},
    { question:"como você se sente nesta noite?","id_cat":BemStar},
    { question:"quantos itens você vendeu nesta manhã?","id_cat":produtividade},
    { question:"quantos itens você vendeu nesta tarde?","id_cat":produtividade},
    { question:"quantos itens você vendeu nesta noite?","id_cat":produtividade},
    { question:"quantos clientes você atendeu nas redes sociais nesta manhã?","id_cat":Conectividade},
    { question:"quantos clientes você atendeu nas redes sociais nesta tarde?","id_cat":Conectividade},
    { question:"quantos clientes você atendeu nas redes sociais nesta noite?","id_cat":Conectividade},
       
  ]);
};