'use strict';

const {sendCurrentHistory} = require('../controllers/webSocketControllers');

module.exports = (fastify, opt, done) => {
  fastify.get('/data', { websocket: true }, sendCurrentHistory);
  done();
};
