const express = require("express")
const router = express.Router()
// 路由級別
router.get("/home", (req, res) => {
  res.send("home")
})

router.get("/login", (req, res) => {
  res.send("login")
})

module.exports = router