const faker = require('faker');
const _ = require('lodash');

const places = require('./mongodb/places.json');
const users = require('./mongodb/users.json');

faker.seed(123);
const like = () => ({
  placeId: {
    $oid: faker.random.arrayElement(places)._id.$oid,
  },
  userId: {
    $oid: faker.random.arrayElement(users)._id.$oid,
  },
});

const generate = (number = 0) => JSON.stringify(
  new Array(number)
    .fill(like, 0, number - 1)
    .map((f) => f())
    .filter(Boolean),
  null, 2,
);

console.log(generate(1000));
