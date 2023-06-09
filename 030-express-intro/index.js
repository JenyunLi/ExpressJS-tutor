const express = require("express")
const app = express()

app.get("/", (req, res) => {
  // res.send(`
  // <html>
  //   <h2>hello</h2>
  // </html>
  // `)
  res.send({
    name: "kerwin",
    age: 100
  })
})

app.get("/login", (req, res) => {
  res.write("login")
  res.end()
})

// 方法1
// app.get("/home", (req, res, next) => {
//   // 验証用戶token过期, cookie过期
//   console.log("验証token");
//   const isValid=true
//   if (isValid) {
//     next()
//   } else {
//     // 返回错误
//     res.send("error")    
//   }
// }, (req, res) => {
//   // 查詢数据库
//   // 返回內容
//   res.send({list:[1,2,3]})
// })

// 方法2

const func1 = (req, res, next) => {
  // 验証用戶token过期, cookie过期
  console.log("验証token");
  const isValid = true
  if (isValid) {
    res.kerwin="这是func1計算的結果"
    next()
  } else {
    // 返回错误
    res.send("error")
  }
}

const func2 = (req, res) => {
  // 查詢数据库
  // 返回內容
  console.log(res.kerwin);
  res.send({ list: [1, 2, 3] })
}

app.get("/home", [func1, func2])

app.get("/list", [func1], (req,res) => { 
  res.send("list")
})

// regular express
// app.get("/ab?cd",(req,res)=>{
//   res.send("ok")
// })

// app.get("/ab/:id/:id2",(req,res)=>{
//   res.send("ok")
// })

// app.get("/ab+cd",(req,res)=>{
//   res.send("ok")
// })

// app.get("/ab*cd",(req,res)=>{
//   res.send("ok")
// })

// 匹配/abe和/abcde
// app.get("/ab(cd)?e", (req, res) => {
//   res.send("ok")
// })

//使用正则表达式的路由路径示例：

//匹配任何路径中含有a的路徑
// app.get(/a/, function (req, res) {
//   res.send('/a/');
// });

// 匹配 butterfly、dragonfly, 不匹配 butterflyman、dragonfly man等
// app.get(/.*fly$/, function (req, res) {
//   res.send('/.*fly$/');
// });

app.listen(3000, () => {
  console.log("server start");
})
 