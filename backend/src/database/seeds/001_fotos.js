
export function seed(knex) {

  // Deletes ALL existing entries
  try {
    return knex('fotos').del()
      .then(function () {
        // const dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
        // const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
        // Inserts seed entries
        return knex('fotos').insert([
          { idfoto: '2', name: 'meta.jpg', size: "5419", key: '3a27fe9b48ce77363981148dc57c6b7c-meta.jpg', url: "https://imagensjosinaldo.s3.amazonaws.com/3a27fe9b48ce77363981148dc57c6b7c-meta.jpg"  },
          { idfoto: '1', name: 'OPCLIENT.png', size: "146", key: 'OPCLIENT.png', url: "https://imagensjosinaldo.s3.amazonaws.com/OPCLIENT.png" },
          { idfoto: '3', name: 'foto_perfil.jpg', size: "146", key: 'foto_perfil.jpg', url: "https://imagensjosinaldo.s3.amazonaws.com/foto_perfil.jpg" },
          { idfoto: '4', name: 'foto_perfil2.jpg', size: "146", key: 'foto_perfil2.jpg', url: "https://imagensjosinaldo.s3.amazonaws.com/foto_perfil2.jpg" },
          { idfoto: '90e65bae913d452719ed1967', name: 'Cinza Ardósia Círculo Bar e BoateLogotipo.png', size: "157358", key: 'bea24311c67f707c356de00aaa2bd151-Cinza Ardósia Círculo Bar e BoateLogotipo.png', url: "https://imagensjosinaldo.s3.amazonaws.com/bea24311c67f707c356de00aaa2bd151-Cinza%20Ard%C3%B3sia%20C%C3%ADrculo%20Bar%20e%20BoateLogotipo.png" }
        ]);
      });
  } catch (error) {
    console.log(error)
  }
}
// dia: new Date().getDate(), mes: (new Date().getMonth() + 1), ano: new Date().getFullYear()