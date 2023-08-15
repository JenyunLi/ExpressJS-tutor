var express = require('express');
const UserController = require('../controllers/UserController');
var router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' })

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

// Add User 响应前端的請求
/**
 * 
 * @api {post} /api/user 添加用户
 * @apiName addUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 * @apiParam  {String} username 用戶名
 * @apiParam  {String} password 密码
 * @apiParam  {Number} age 年齡
 * @apiParam  {File} avatar 头像
 * 
 * @apiSuccess (200) {Number} ok 标示成功字段
 * 
 * @apiParamExample  {multipart/form-data} Request-Example:
 * {
 *    username : "kerwin",
 *    password : "XXXXXX",
 *    age : 18,
 *    avatar : File object
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     ok : 1
 * }
 * 
 * 
 */
router.post('/user', upload.single("avatar"), UserController.addUser)

// Update User 动态路由 获取id
router.put('/user/update/:myid', UserController.updateUser)

// Delete User
/**
 * 
 * @api {delete} /api/user/:myid 刪除用戶
 * @apiName deleteUser
 * @apiGroup usergroup
 * @apiVersion  1.0.0
 * 
 * @apiParam  {String} myid 用戶id
 * 
 * @apiSuccess (200) {Number} ok 标示成功字段
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     ok : 1
 * }
 * 
 * 
 */
router.delete('/user/:myid', UserController.deleteUser)

// 获取列表
router.get("/user", UserController.getUser)

// 登录校验
router.post("/login", UserController.login)

// 登出
router.get("/logout", UserController.logout)

// 获取用户信息

module.exports = router;
