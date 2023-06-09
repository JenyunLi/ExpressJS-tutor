const express = require("express")
const app = express()
const IndexRouter= require("./router2/indexRouter")

// 应用級別
app.use(function(req,res,next){
  console.log("验証token");
  next()
})

// 路由級別
app.use("/api", IndexRouter)

app.listen(3000, () => {
  console.log("server start");
})
 