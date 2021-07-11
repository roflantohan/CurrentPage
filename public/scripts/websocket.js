const host = location.origin.replace(/^http/, 'ws');
const ws = new WebSocket(host + '/data');

ws.onopen = event => {
  const path = "current";
  const data = {
    path: path,
    state: 'initial',
  };
  ws.send(JSON.stringify(data));
};

ws.onmessage = message => {
  const msg = JSON.parse(message.data);
  if(msg.path === 'server'){
    if (Array.isArray(msg.data))
      msg.data.map(record => {
        addRecord(record)
      })
      clearRecord();
  }
};
