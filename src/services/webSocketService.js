'use strict';

const sockets = [];

const checkIdUserSocket = (socket) => {
  let flag = true;
  sockets.map(elem => {
    if(elem === socket){
      flag = false;
    }
  })
  if(flag) sockets.push(socket)
  return socket;
};

const getIdUserSocket = () => {
  return sockets;
};

module.exports = {
  checkIdUserSocket,
  getIdUserSocket,
};
