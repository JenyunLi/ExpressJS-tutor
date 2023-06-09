const express = require("express")
const router = express.Router()
// 路由級別-响应前端的get請求
router.get("/", (req, res) => {
  // new URL
  console.log(req.query);
  res.send("login-success")
})
// 路由級別-响应前端的get請求
router.post("/", (req, res) => {
  // 必需配置中間件
  console.log(req.body);
  const { username, password } = req.body
  if (username === "admin" && password === "123") {
    res.send({ ok: 1 })
  } else {
    res.send({ ok: 0 })
  }
})

module.exports = router