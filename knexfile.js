// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    version: '14.3',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'todo_app',
      password: 'todo_app',
      database: 'todo_app_db'
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },

  staging: {
    client: 'pg',
    version: '14.3',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'todo_app',
      password: 'todo_app',
      database: 'todo_app_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    version: '14.3',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'todo_app',
      password: 'todo_app',
      database: 'todo_app_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
