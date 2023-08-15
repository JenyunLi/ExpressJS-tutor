var express = require('express');
const JWT = require('../util/JWT');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 判断req.session.user是否有值
  // if(req.session.user){
    res.render('chat', { title: 'Express'});
  // } else {
  //   res.redirect('/login');
  // }
});

// 測試token的加密与验証过程 JWT.js
// const token= JWT.generate({
//   name: "kerwin"
// } , '10s' );

// console.log(JWT.verify(token));

// setTimeout(() => { 
//   console.log(JWT.verify(token));
//  }, 9000)

//  setTimeout(() => { 
//   console.log(JWT.verify(token));
//  }, 11000)

// 測試token的加密与验証过程 sonwebtoken
// var jwt = require("jsonwebtoken")
// var token = jwt.sign({
//   data: "kerwin"
// } , 'anykey' , { expiresIn: '2s' });

// console.log(token);
// // verify
// var decoded= jwt.verify(token , 'anykey');
// console.log(decoded);
// setTimeout(() => { 
//   var decoded= jwt.verify(token , 'anykey');
//   console.log(decoded);
//  }, 5000)

module.exports = router;
