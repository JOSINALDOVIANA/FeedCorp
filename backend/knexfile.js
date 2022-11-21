// Update with your config settings.

export const development = {
  client: 'mysql',
  connection: {
    
    host: 'localhost',
   
    user: '',
    password: '',

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
    database: '',
    user: '',
    password: ''
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