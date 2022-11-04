// Update with your config settings.

export const development = {
  client: 'mysql',
  connection: {
    // host: `mydbjosinaldo.csjtctuw0vgd.us-east-1.rds.amazonaws.com`,
    host:'109.123.243.212',
    // user: 'josinaldo_master',
    user:'feedcorp',
    password:'Wikazako@123*',
   
     database: 'feedcorp',
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }

  
};
export const staging = {
  client: 'mysql',
  connection: {
    database: 'opclient',
    user: 'rainerio',
    password: 'meta2020'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
};
export const production = {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};