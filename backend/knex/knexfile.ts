// Update with your config settings.
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

module.exports = {
  development: {
    client: 'mysql2',
    migrations: {
      extension: 'ts',
    },
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      extension: 'ts',
    },
  },
};
