import md5 from 'md5';

export function seed(knex) {

  // Deletes ALL existing entries
  try {
    return knex('loja').del()
      .then(function () {
        // const dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
        // const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
        // Inserts seed entries
        return knex('loja').insert([
          {
            idloja: 'cb4c2d0cc1939561b6d7f57e79d0ef37',
            nomefantasia: 'faculdade meta',
            cnpj: '16755753000147',
            pais: 'Brasil',
            estado: 'Amapá',
            cidade: 'Macapá',
            bairro: 'Central',
            rua: 'fab',
            numero: '2059',
            cep: '68909818',
            telefone: '32268020',
            email: 'faculdademeta@gmail.com',
            senha: `${md5('wikazako')}`,
            site: 'meta.edu.br',
            id_foto: '2',
            id_prop: '64f5bdbe0f25f61bc1924b7527573eca',
           
          },
          {
            idloja: 'cb4c2d0cc1939561b6d7f57e79d0ef47',
            nomefantasia: 'Bank S.A',
            cnpj: '55705691000110',
            pais: 'Brasil',
            estado: 'Amapá',
            cidade: 'Macapá',
            bairro: 'Central',
            rua: 'fab',
            numero: '2059',
            cep: '68909819',
            telefone: '32268020',
            email: 'Bank@gmail.com',
            senha: `${md5('wikazako')}`,
            site: 'www.BankSA.com.br',
            id_foto: '1',
            id_prop: '64f5bdbe0f25f61bc1924b7527573eca',
            
          },

        ]);
      });
  } catch (error) {
    console.log(error);
  }

}
// dia: new Date().getDate(),
//             mes: (new Date().getMonth() + 1),
//             ano: new Date().getFullYear()