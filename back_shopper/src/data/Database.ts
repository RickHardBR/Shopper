import dotenv from 'dotenv';

import knex from 'knex';

dotenv.config();

export class BaseDatabase {
  
  protected static getConnection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_SCHEMA,
          port: 3306 || process.env.DB_PORT,
          multipleStatements: true         
        },
      });
}