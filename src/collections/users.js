const getById = async (db, id) => {
  const collection = db.collection('users');
  return collection.findOne({ id });
};

const getByEmail = async (db, email) => {
  const collection = db.collection('users');
  return collection.findOne({ email });
};

module.exports = {
  getById,
  getByEmail,
};
