const getAll = async (db) => {
  const collection = db.collection('places');

  return collection.find().toArray();
};

const getById = async (db, id) => {
  const collection = db.collection('places');
  return collection.findOne({ id });
};

module.exports = {
  getAll,
  getById,
};
