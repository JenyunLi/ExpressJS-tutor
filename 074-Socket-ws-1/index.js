const express = require('express');
const app = express();

// http static server
app.use(express.static('./public'))

// http server
app.get('/', (req, res) => {
  res.send({ ok: 1 })
})

app.listen(3000)

// simple websocket server
const WebSocket = require('ws');
const { WebSocketServer } = WebSocket;
const wss = new WebSocketServer({ port: 8080 });

// 处理客户端各种信号 ws.send('hello') in browser console
wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    // broadcast to all.转发給其他人
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: false });
      }
    });
  });

  ws.send('欢迎来到聊天室');
});


