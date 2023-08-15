var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

// Add User
router.post('/user/add', (req, res) => {
  console.log(req.body);
  // insert into db
  // 创建一𠆤模型(user) 对应数据库的集合(users)
  // user.Create Find Delete Update
  const { username, password, age } = req.body;
  UserModel.create({ username, password, age })
    .then((data) => {
      console.log(data);
      res.send({ ok: 1 });
    })
})

// Update User
router.post('/user/update/:myid', (req, res) => {
  console.log(req.body, req.params.myid);
  const { username, password, age } = req.body;
  UserModel.updateOne({ _id: req.params.myid }, {
    username, password, age
  }).then((data) => {
    res.send({ ok: 1 });
  })
})

// Delete User
router.post('/user/delete/:myid', (req, res) => {
  console.log(req.body, req.params.myid);
  UserModel.deleteOne({ _id: req.params.myid }).then((data) => {
    res.send({ ok: 1 });
  })
})

// 获取列表
router.get("/user/list", (req, res) => {
  console.log(req.query);
  let { page, limit } = req.query;
  UserModel.find({},["username","age"]).sort({age:-1})
    .skip((page - 1) * limit)
    .limit(limit)
    .then((data) => {
    res.send(data);
  });
})

module.exports = router;
