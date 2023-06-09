// 引入 library
const express = require('express');
// express 引入的是一個 function
const getDBConfig = require('./DBConfig')
const mysql2= require('mysql2');
const app = express();
// 建立一個不易產生衝突的 port 用來測試
const port = 5001;

app.get('/', async (req, res) => {
  const configDB= getDBConfig()
  console.log(configDB);
  const promisePool= mysql2.createPool(configDB).promise()
  var name="小明"
  var gender= 1
  var users= await promisePool.query(
    `SELECT * FROM students
    WHERE name=? and gender=? limit 2`,[name, gender])
  console.log(users)
  res.send({ok:1, data:users[0]})
})

app.listen(port, () => { console.log('server is running'); })

