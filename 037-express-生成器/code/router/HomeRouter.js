const express = require("express")
const router = express.Router()
// 路由級別
router.get("/", (req, res) => {
  // res.send("home")
var list = ["aaa", "bbb", "ccc", "ddd"]
var myhtml="<b>加粗</b>"
  res.render("home", { list: list, myhtml })
})

router.get("/list", (req, res) => {
  res.send(["111", "222", "333"])
})

router.get("/swiper", (req, res) => {
  res.send("home-swiper")
})

router.get("/slide", (req, res) => {
  res.send("home-slide")
})

module.exports = router