const express = require("express")
const router = express.Router()
// 路由級別-响应前端的get請求
router.get("/", (req, res) => {
  // new URL
  // console.log(req.query);
  // res.send("login-success")
  // res.send("<b>aaa</b>")
  // res.json([1,2,3])
  // 渲染模板後傳給前端
  res.render("login", { title: "登入頁面", error: "", isShow: false }) // 找views文件夾login.ejs
})

router.post("/", (req, res) => {
  if (req.body.username === "admin" && req.body.password === "123") {
    res.redirect("/home")
    console.log('login-success');
  }
  else {
    console.log('login-fail');
    res.render("login", { title: "登入錯誤", error: "用戶名或密码不符", isShow: true })
  }
})

module.exports = router