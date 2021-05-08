const Mongodb = require('mongodb');

const places = require('../collections/places');
const reviews = require('../collections/reviews');

const getByPlaceId = (db) => async (request, reply) => {
  const place = await places.getById(db, Number(request.params.placeId));

  if (!place) {
    reply.callNotFound();
  }

  const { _id: placeId } = place;
  const payload = await reviews.getByPlaceId(db, placeId);

  reply.send(payload);
};

const getById = (db) => async (request, reply) => {
  const review = await reviews.getById(db, request.params.reviewId);

  if (!review) {
    reply.callNotFound();
  }

  reply.send(review);
};

const create = (db) => async (request, reply) => {
  const { review } = request.body;
  const result = await reviews.insertOne(db, {
    placeId: new Mongodb.ObjectID(review.placeId),
    userId: new Mongodb.ObjectID(review.userId),
  });

  if (!result.insertedCount === 1) {
    throw new Error('Review creation failed');
  }

  const { insertedCount, insertedId } = result;

  reply.send({
    insertedCount,
    insertedId,
  });
};

const remove = (db) => async (request, reply) => {
  const { reviewId } = request.params;
  const result = await reviews.deleteOne(db, new Mongodb.ObjectID(reviewId));

  const { deletedCount } = result;

  reply.send({
    deletedCount,
  });
};

module.exports = {
  create,
  remove,
  getByPlaceId,
  getById,
};
