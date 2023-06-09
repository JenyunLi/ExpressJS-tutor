const express = require("express")
const router = express.Router()
// 路由級別
router.get("/", (req, res) => {
  res.send("login")
})

module.exports = router