var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // 讀取前端的cookie值
  console.log(req.cookies);
  // 設定前端的cookie值
  res.cookie("gender", "male")
  res.send({name: "Kerwin"});
});

module.exports = router;
