'use strict';

module.exports = (fastify, opts, done) => {
  fastify.get('/current', (req, res) => res.sendFile('./pages/current.html'));
  done();
};
