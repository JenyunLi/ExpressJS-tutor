const express = require("express")
const app = express()
const HomeRouter= require("./router3/HomeRouter")
const LoginRouter= require("./router3/LoginRouter")

// 应用級別
app.use(function(req,res,next){
  console.log("验証token");
  next()
})
// 应用級別
app.use("/home", HomeRouter)
app.use("/login", LoginRouter)

// 錯误中間件
app.use((req,res) => { 
  res.status(404).send("丟了")
 })

app.listen(3000, () => {
  console.log("server start");
})
 