const fastify = require('fastify');
const jwt = require('fastify-jwt');

const dbConnector = require('./db-connector');
const places = require('./routes/places');
const reviews = require('./routes/reviews');
const authentication = require('./routes/authentication');

const build = (opts = {}) => {
  const { connectionString, jwtSecret } = opts;
  const app = fastify(opts);

  app.register(jwt, { secret: jwtSecret });
  app.register(dbConnector(connectionString));
  app.register(places);
  app.register(reviews);
  app.register(authentication);

  app.decorate('authenticate', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });

  return app;
};

module.exports = build;
