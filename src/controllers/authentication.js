const users = require('../collections/users');

const exists = (db) => async (user) => {
  const res = await users.getByEmail(db, user.email);
  return !!res;
};

module.exports = {
  exists,
};
