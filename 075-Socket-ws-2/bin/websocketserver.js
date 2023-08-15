// simple websocket server
const WebSocket = require('ws');
const JWT = require('../util/JWT');
const { WebSocketServer } = WebSocket;
const wss = new WebSocketServer({ port: 8080 });

// 处理客户端各种信号 ws.send('hello') in browser console
wss.on('connection', function connection(ws, req) {
  // console.log(req.url);
  const myURL = new URL(req.url, 'http://localhost:8080');
  // console.log(myURL.searchParams.get('token'));
  // 校验token
  const payload = JWT.verify(myURL.searchParams.get('token'));
  if (payload) {
    ws.send(createMessage(WebSocketType.GroupChat, null, '欢迎来到聊天室'));
    ws.user = payload
    // console.log(payload);
    sendAll()
  } else {
    ws.send(createMessage(WebSocketType.Error, null, 'token验證未授权'));
  }
  ws.on('message', function message(data) {
    // console.log('received: %s', data);
    // // broadcast to all.转发給其他人
    // wss.clients.forEach(function each(client) {
    //   if (client !== ws && client.readyState === WebSocket.OPEN) {
    //     client.send(data, { binary: false });
    //   }
    // });
    const msgObj = JSON.parse(data);
    switch (msgObj.type) {
      case WebSocketType.GroupList:
        // console.log(wss.clients);
        const user = Array.from(wss.clients).map(client => client.user);
        console.log(user);
        ws.send(createMessage(WebSocketType.GroupList, null, JSON.stringify(user)));
        break;
      case WebSocketType.GroupChat:
        console.log(msgObj.data);
        wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(createMessage(WebSocketType.GroupChat, ws.user, msgObj.data), { binary: false });
          }
        });
        break;
      case WebSocketType.SingleChat:
        wss.clients.forEach(function each(client) {
          if (client.user.username===msgObj.to && client.readyState === WebSocket.OPEN) {
            client.send(createMessage(WebSocketType.SingleChat, ws.user, msgObj.data), { binary: false });
          }
        });
        break;

      default:
        break;
    }
  });

  ws.on("close", () => {
    wss.clients.delete(ws.user);
    // console.log(ws.user);
    sendAll()
  })
});

// 生成各种信号的函数
const WebSocketType = {
  Error: 0, // 错误
  GroupList: 1, // 获取列表
  GroupChat: 2, // 群聊
  SingleChat: 3, // 私聊
}

function createMessage(type, user, data) {
  return JSON.stringify({
    type,
    user,
    data,
  })
}

// 群发
function sendAll(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      const user = Array.from(wss.clients).map(client => client.user);
      client.send(createMessage(WebSocketType.GroupList, null, JSON.stringify(user)));
    }
  })
}