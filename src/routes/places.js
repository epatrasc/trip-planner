const places = require('../controllers/places');
const reviews = require('../controllers/reviews');

const routes = async (fastify, options) => {
  const { db } = fastify.mongo;

  fastify.get('/places', places.getAll(db));

  fastify.get('/places/:placeId', places.getById(db));
  fastify.get('/places/:placeId/reviews', reviews.getByPlaceId(db));
};

module.exports = routes;
