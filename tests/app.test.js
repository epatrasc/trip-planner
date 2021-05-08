require('dotenv').config();
const build = require('../src/app');

const connectionString = process.env.DB_CONNECTION_STRING;
const jwtSecret = process.env.JWT_SECRET;

describe('Testing app', () => {
  let app;

  beforeEach(() => {
    app = build({
      logger: {
        level: 'info',
        prettyPrint: true,
      },
      connectionString,
      jwtSecret,
    });
  });

  afterEach(async () => {
    await app.close();
  });

  describe('/places namespace', () => {
    it('should GET all the places', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/places',
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual(expect.any(Array));
    });

    it('should GET the place with id', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/places/69646',
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual(expect.any(Object));
    });

    it('should return 404 when place DO NOT exist', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/places/-1',
      });

      expect(response.statusCode).toBe(404);
    });

    it('should GET reviews for the required place', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/places/28821/reviews',
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual(expect.any(Array));
    });

    it('should GET return 404 when place DO NOT exist', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/places/-1/reviews',
      });

      expect(response.statusCode).toBe(404);
    });
  });

  describe('Authentication API', () => {
    it('should return token with valid user', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/signup',
        payload: {
          user: {
            name: 'Maurine42',
            email: 'Maryse_Lubowitz49@gmail.com',
            role: 'USER',
          },
        },
      });

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual(expect.any(Object));
    });

    it('should return 404 with invalid user', async () => {
      const response = await app.inject({
        method: 'POST',
        url: 'signup',
        payload: {
          user: {
            name: 'fake user',
            email: 'fake@gmail.com',
            role: 'USER',
          },
        },
      });

      expect(response.statusCode).toBe(404);
    });
  });
});
