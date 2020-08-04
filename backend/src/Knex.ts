import knex from 'knex';
import moment from 'moment';

export class Knex {
  private static _instance: knex;

  private constructor() {}

  public static i(): knex {
    if (!Knex._instance) {
      Knex._instance = knex({
        client: 'mysql2',
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME,
          typeCast(field, next) {
            if (field.type === 'DATETIME') {
              return moment(field.string()).format();
            }
            return next();
          },
        },
      });
    }

    return Knex._instance;
  }
}
