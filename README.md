<h1 align="center">TripPlanner - API <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/></svg></h1>

<p align="center">
<b><a href="#overview">Overview</a></b>
|
<b><a href="#development">Development</a></b>
|
<b><a href="#testing">Testing</a></b>
|
<b><a href="#api">API</a></b>
</p>

## Overview

TripPlanner is the definitive API for planning your trips.
You can view places, leave or remove reviews. 
Some of the API are public and doesn't require authentication.
For the access to the private APIs you need to `/signup` with your email.
Authentication is handled with JWT.


## Development
### Requirements
* Node.js version >= 14.16.1 (current stable version)

### Getting started

1. Clone the repository `git clone XXXXXXXX`
2. Run `npm install`
3. Create the file `.env` at the root level
4. Add the following parameters:
   1. DB_CONNECTION_STRING = [mongodb string connection]
   2. JWT_SECRET = [string used for JWT encryption]
5. Start the server with `npm run start`
6. Start the server with hot-reloading `npm run develop`
7. Use [`postman collection`](./postman/TripPlanner.postman_collection.json)  to test the API

## Testing

Run all the tests with `npm test`, use `npm run test:watch` for hot-reloading.

Test are run with [Jest](https://jestjs.io).
Consistent code style is enforced with [ESLint](http://eslint.org) using `airbnb-base` rules.

# API

All the APIs are documented here, you can update the documentation by running 
``` shell
npm run update:docs
```

<a href="./docs/index.html" target="_top">API Docs</a>