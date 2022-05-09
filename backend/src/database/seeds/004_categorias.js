
export function seed(knex) {

  // Deletes ALL existing entries
  return knex('categorias').del()
    .then(function () {
      // const dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
      // const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
      // Inserts seed entries
      return knex('categorias').insert([
        {
          idcategoria: 1,
          cat: 'sugestões',
         
        },
        {
          cat: 'críticas',
          idcategoria: 2,
          
        },
        {
          cat: 'produtos não encontrados',
          idcategoria: 3,
          
        },
      ]);
    });
}

// dia: new Date().getDate(),
//           mes: (new Date().getMonth() + 1),
//           ano: new Date().getFullYear()