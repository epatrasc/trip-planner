const reviews = require('../controllers/reviews');

const routes = async (fastify, options) => {
  const { db } = fastify.mongo;

  fastify.get('/reviews/:reviewId', reviews.getById(db));
  fastify.post('/reviews/create',
    { preValidation: [fastify.authenticate] },
    reviews.create(db));

  fastify.delete('/reviews/:reviewId',
    { preValidation: [fastify.authenticate] },
    reviews.remove(db));
};

module.exports = routes;
