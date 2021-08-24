const router = require('express').Router();
const PublicApi = require('./publicApi.js');

module.exports = () => {
  PublicApi(router);
  return router;
};
