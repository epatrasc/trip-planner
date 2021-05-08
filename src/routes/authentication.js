const authentication = require('../controllers/authentication');

const routes = async (fastify, options) => {
  const { db } = fastify.mongo;

  fastify.post('/signup', async (req, reply) => {
    const { user } = req.body;

    if (await authentication.exists(db)(user)) {
      const token = fastify.jwt.sign(user);
      return reply.send({ token });
    }

    return reply.callNotFound();
  });
};

module.exports = routes;
