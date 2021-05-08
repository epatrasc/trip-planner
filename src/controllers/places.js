const places = require('../collections/places');

const getAll = (db) => async (request, reply) => {
  const payload = await places.getAll(db);
  reply.send(payload);
};

const getById = (db) => async (request, reply) => {
  const payload = await places.getById(db, Number(request.params.placeId));
  if (payload === null) {
    reply.callNotFound();
  }

  reply.send(payload);
};

module.exports = {
  getAll,
  getById,
};
