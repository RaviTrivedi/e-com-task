//* Import knex and config file
const knex = require("knex");
const knexConfig = require("../knexfile");

//* Setup the configuration to use
const environment = "development";
const config = knex(knexConfig[environment]);

//* Export the configuration
module.exports = config;