
export function seed(knex) {

  // Deletes ALL existing entries
  return knex('criticas').del()
    .then(function () {
      // const dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
      // const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
      // Inserts seed entries
      return knex('criticas').insert([
        {
          id_loja: 'cb4c2d0cc1939561b6d7f57e79d0ef47',
          nome: 'marlete',
          sobrenome: 'oliveira rodrigues',
          email: 'marlete@gmail.com',
          telefone: '981149496',
          id_cat: '1',
          coment: 'muito burocratico abrir um conta',
          
        },

        {
          id_loja: 'cb4c2d0cc1939561b6d7f57e79d0ef37',
          nome: 'marlete',
          sobrenome: 'oliveira rodrigues',
          email: 'marlete@gmail.com',
          telefone: '981149496',
          id_cat: '1',
          coment: 'infraestrutura ruim',
         
        },

      ]);
    });
}
// dia: new Date().getDate(),
// mes: (new Date().getMonth() + 1),
// ano: new Date().getFullYear()