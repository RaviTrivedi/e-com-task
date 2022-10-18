//* Shared configuration for development and testing
const sharedConfig = {
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
};

//* Export the configuration types
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "password",
      database: "local_ecom",
      port: 3306
    },
    pool: {
      min: 0,
      max: 20,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};