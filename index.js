const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');

const apiHandler = require('./api/handle-api.js');

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));

const HTTP_SERVER = http.createServer(app);

function setNoCache(req, res, next) {
  res.set('Cache-Control', 'no-store');
  next();
}

app.use(
  '/api',
  // 强制不做缓存
  setNoCache,
  // verifyCookie,
  apiHandler(),
);

HTTP_SERVER.listen(7777, () => {
  console.log(`\nopen on port 7777\n`);
});