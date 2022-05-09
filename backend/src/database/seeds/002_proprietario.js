import Md5 from 'md5';
export function seed(knex) {

  // Deletes ALL existing entries
  return knex('proprietario').del()
    .then(function () {
      // const dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
      // const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
      // Inserts seed entries
      return knex('proprietario').insert([
        {
          idprop: "1b54113e0aba341f95584e67b22fa57",
          nome: 'user',
          sobrenome: 'teste',
          cpf: 'XXXXXXXXXXXY',
          rg: 'XXXXX',
          pais: 'Brasil',
          estado: 'Amapá',
          cidade: 'Macapá',
          bairro: 'Central',
          rua: 'fab',
          numero: '2059',
          cep: '68900000',
          telefone: 'XXXXXX',
          email: 'user@teste.com',
          senha: Md5('123456'),
          id_foto: 1,
          
        },
        {
          idprop: "64f5bdbe0f25f61bc1924b7527573eca",
          nome: 'user2',
          sobrenome: 'teste2',
          cpf: 'XXXXXXXXXXX',
          rg: 'XXXXXY',
          pais: 'Brasil',
          estado: 'Amapá',
          cidade: 'Macapá',
          bairro: 'Central',
          rua: 'fab',
          numero: '2059',
          cep: '68900000',
          telefone: 'XXXXXX',
          email: 'user2@teste2.com',
          senha: Md5('123456'),
          id_foto: 1,
          
        },

      ]);
    });
}
// dia: new Date().getDate(),
//           mes: (new Date().getMonth() + 1),
//           ano: new Date().getFullYear()