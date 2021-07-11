'use strict';
const {
  checkIdUserSocket,
  getIdUserSocket,
} = require('../services/webSocketService');

const sendCurrentHistory = (connection, req) => {
	connection.socket.on('message', message => {
		const msg = JSON.parse(message);
		if(msg.path === 'current'){
			checkIdUserSocket(connection.socket);
		}
		if (msg.path === 'data') {
			const users = getIdUserSocket();
			if (users !== undefined) {
				const data = {
					path: "server",
					data: msg.payload
				}
				users.map(user => {
					user.send(JSON.stringify(data));
				})
			}
		}
	});
}

module.exports = {
	sendCurrentHistory,
}