'use strict';

const fastify = require('fastify')({ logger: true });
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
const path = require('path');

//---------websocket-------------//

fastify.register(require('fastify-websocket'), {
  errorHandler: (error, conn, req, reply) => {
    conn.destroy(error);
  },
  options: {
    maxPayload: 1048576,
  },
});

fastify.register(require('./routes/websocket'));
//--------------------------------//



//-----client------//

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../public'),
});

fastify.register(require('./routes/client'));

//-----------------//

fastify.ready(err => {
  if (err) {
    fastify.log.error(err);
    throw err;
  }
});

fastify.listen(PORT, HOST);
