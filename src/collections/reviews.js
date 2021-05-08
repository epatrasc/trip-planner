const Mongodb = require('mongodb');

const getAll = async (db) => {
  const collection = db.collection('reviews');

  return collection.find().toArray();
};

const getById = async (db, id) => {
  const collection = db.collection('reviews');
  return collection.findOne({
    _id: new Mongodb.ObjectID(id),
  });
};

const getByPlaceId = async (db, placeId) => {
  const collection = db.collection('reviews');
  return collection.find({ placeId }).toArray();
};

const insertOne = async (db, review) => db.collection('reviews').insertOne(review);
const deleteOne = async (db, id) => db.collection('reviews').deleteOne({ _id: id });

module.exports = {
  insertOne,
  deleteOne,
  getAll,
  getById,
  getByPlaceId,
};
