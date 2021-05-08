const faker = require('faker');
const _ = require('lodash');

faker.seed(123);

const types = { HOTEL: 'Hotel', RESTAURANT: 'Restaurant' };
const statuses = { OPEN: 'Open', CLOSED: 'closed' };

const place = () => ({
  id: faker.datatype.number(),
  name: faker.commerce.productName(),
  type: faker.random.arrayElement(Object.values(types)),
  tags: faker.random.arrayElements(_.times(10, () => faker.random.word().toLowerCase())),
  photoUrls: faker.random.arrayElements(_.times(10, () => faker.image.image(300, 500))),
  status: faker.random.arrayElement(Object.values(statuses)),
});

const generate = (number = 0) => JSON.stringify(
  new Array(number)
    .fill(place, 0, number - 1)
    .map((f) => f())
    .filter(Boolean),
  null, 2,
);

console.log(generate(10));
