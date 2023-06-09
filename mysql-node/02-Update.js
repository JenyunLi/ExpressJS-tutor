// 引入 library
const express = require('express');
// express 引入的是一個 function
// const db = require('./db')
const mysql2= require('mysql2');
const app = express();
// 建立一個不易產生衝突的 port 用來測試
const port = 5001;

app.get('/', async (req, res) => {
  const configDB= getDBConfig()
  const promisePool= mysql2.createPool(configDB).promise()
  var name="铁槌"
  var gender= 1
  var users= await promisePool.query(
    `UPDATE students SET name=? WHERE id=?`,[name, 3])
  console.log(users)
  res.send({ok:1, data:users[0]})
})

app.listen(port)

function getDBConfig() {
  return {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mdb',
    database: 'kerwin_test',
    connectLimit: 1 // pools
  }
}