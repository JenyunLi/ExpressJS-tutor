const express = require("express")
const app = express()

const HomeRouter= require("./router/HomeRouter")
const LoginRouter= require("./router/LoginRouter")

// 配置模板引擎
app.set("views", "./views")
app.set("view engine", "html")
// 支持直接渲染html文件
app.engine("html", require("ejs").renderFile)

// 配置靜态資源
app.use(express.static("public"))
app.use("/static",express.static("static"))

// 配置解析post中間件
// post參数 username=kerwin&password=123
app.use(express.urlencoded({extended:false}))
// post參数 { "username": "kerwin", "password": "123" }
app.use(express.json())
// 应用級別
// app.use(function(req,res,next){
//   console.log("验証token");
//   next()
// })
// 应用級別
app.use("/home", HomeRouter)
app.use("/login", LoginRouter)

// 錯误中間件
// app.use((req,res) => { 
//   res.status(404).send("丟了")
//  })

app.listen(3000, () => {
  console.log("server start");
})
 