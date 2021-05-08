const faker = require('faker');
const _ = require('lodash');

faker.seed(123);
const user = () => ({
  name: faker.internet.userName(),
  email: faker.internet.email(),
  role: 'USER',
});

const generate = (number = 0) => JSON.stringify(
  new Array(number)
    .fill(user, 0, number - 1)
    .map((f) => f())
    .filter(Boolean),
  null, 2,
);

console.log(generate(10));
