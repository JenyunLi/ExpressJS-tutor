// 引入 library
const express = require('express');
// express 引入的是一個 function
const db = require('./db')
const app = express();
// 建立一個不易產生衝突的 port 用來測試
const port = 5001;
// 設定 view engine
app.set('view engine', 'ejs')

// var indexRouter= require('./routes/index')
var usersRouter= require('./routes/users')
var loginRouter= require('./routes/login')


// 可直接使用 controller 的方法拿取資料和進行 render
// app.get('/', indexRouter)
app.get('/api', usersRouter)
app.get('/login', loginRouter)

// 運行這個 port，參數分別為 port 和要執行的 function
app.listen(port, () => {
  // 連線資料庫
  db.connect()
  console.log(`Example app listening at http://localhost:${port}`)
})