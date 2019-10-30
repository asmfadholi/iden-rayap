'use strict'
// write env here for production

const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../.env` });

module.exports = {
  NODE_ENV: "'production'",
}
