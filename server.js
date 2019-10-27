const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/.env` });
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const history = require('connect-history-api-fallback');
const compression = require('compression');

const app = express();

const port = process.env.PORT || 8080;

app.use(compression());
app.use(history());

app.use('/', serveStatic(path.join(`${__dirname}/dist/`)));

app.listen(port);
