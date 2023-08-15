// simple socket.io server
const JWT = require('../util/JWT')
function start(server) {
  const io = require('socket.io')(server)

  io.on('connection', (socket, req) => {
    // console.log('socket.io connected, ', socket.handshake.query.token);
    const payload= JWT.verify(socket.handshake.query.token)
    // console.log(payload);
    if (payload) {
      socket.user= payload
      // 发送欢迎
      socket.emit(WebSocketType.GroupChat, createMessage(null, '欢迎來到聊天室'))
      // 发送所有用戶列表
      sendAll(io)
    } else {
      socket.emit(WebSocketType.Error, createMessage(null, 'token过期'))
    }

    socket.on(WebSocketType.GroupList, () => { 
      // console.log(io.sockets.sockets)
      // const sockets = Array.from(io.sockets.sockets).map(item=>item[1].user)
      // console.log(sockets);
    })
    // 发給所有人
    socket.on(WebSocketType.GroupChat, (msg) => {
      // console.log(msg);
      // 发給所有人
      io.sockets.emit(WebSocketType.GroupChat, createMessage(socket.user, msg.data))

      // 发給所有人，不包括自己
      // socket.broadcast.emit(WebSocketType.GroupChat, createMessage(socket.user, msg.data))
    })
    // 发給特定user
    socket.on(WebSocketType.SingleChat, (msgObj) => {
      Array.from(io.sockets.sockets).forEach(item=>{
        if (item[1].user.username === msgObj.to) {
          item[1].emit(WebSocketType.SingleChat, createMessage(socket.user, msgObj.data))
        } 
      })
    })

    socket.on('disconnect', () => {
      sendAll(io)
    })
  })
}

// 生成各种信号的函数
const WebSocketType = {
  Error: 0, // 错误
  GroupList: 1, // 获取列表
  GroupChat: 2, // 群聊
  SingleChat: 3, // 私聊
}

function createMessage(user, data) {
  return {
    user,
    data,
  }
}

// 群发
function sendAll(io) {
  // console.log(Array.from(io.sockets.sockets).map(item=>item[1].user))
  // 加上.filter(item=>item) 不然上面的log会有元素undefined
  io.sockets.emit(WebSocketType.GroupList, createMessage(null, Array.from(io.sockets.sockets).map(item=>item[1].user).filter(item=>item)))
}

module.exports = start