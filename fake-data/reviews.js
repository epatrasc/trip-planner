const faker = require('faker');
const _ = require('lodash');

const places = require('./mongodb/places.json');
const users = require('./mongodb/users.json');

faker.seed(123);
const review = () => ({
  placeId: {
    $oid: faker.random.arrayElement(places)._id.$oid,
  },
  userId: {
    $oid: faker.random.arrayElement(users)._id.$oid,
  },
  title: faker.lorem.words(),
  description: faker.lorem.paragraph(),
});

const generate = (number = 0) => JSON.stringify(
  new Array(number)
    .fill(review, 0, number - 1)
    .map((f) => f())
    .filter(Boolean),
  null, 2,
);

console.log(generate(1000));
