require('dotenv').config();

const connectionString = process.env.DB_CONNECTION_STRING;
const jwtSecret = process.env.JWT_SECRET;

const server = require('./src/app')({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
  connectionString,
  jwtSecret,
});

const port = 5000;

server.listen(port, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Connected at ${address}:${port}`);
});
