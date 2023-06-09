// 引入 library
const express = require('express');
// express 引入的是一個 function
// const db = require('./db')
const mysql2= require('mysql2');
const app = express();
// 建立一個不易產生衝突的 port 用來測試
const port = 5001;

const getDBConfig =require('./DBConfig')

app.get('/', async (req, res) => {
  const configDB= getDBConfig()
  const promisePool= mysql2.createPool(configDB).promise()
  var name="小華"
  var gender= 2
  var score= 100
  var class_id= 3
  var users= await promisePool.query(
    `INSERT students (name,score,gender,class_id) 
    VALUES (?,?,?,?)`,[name, score, gender,class_id])
  console.log(users)
  res.send({ok:1, data:users[0]})
})

app.listen(port)

