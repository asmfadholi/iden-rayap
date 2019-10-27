'use strict'

const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../.env` });

module.exports = {
  NODE_ENV: '"development"',
}
