const fastifyPlugin = require('fastify-plugin');
const fastifyMongodb = require('fastify-mongodb');

const dbConnector = (connectionString) => async (fastify, options) => {
  fastify.register(fastifyMongodb, {
    url: connectionString,
  });
};

module.exports = (connectionString) => fastifyPlugin(dbConnector(connectionString));
