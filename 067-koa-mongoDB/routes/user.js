const Router= require('koa-router');
const router= new Router();

const multer= require('@koa/multer');
const UserModel = require('../model/UserModel');

const upload= multer({
  dest: 'public/uploads/',
})

// 新增
router.post('/',(ctx,next)=>{
  console.log(ctx.request.body);
  ctx.body= {
    ok:1,
    info: "新增用戶成功"
  }
})

// 获取前端传來的參数
router.get('/',(ctx,next)=>{
  console.log(ctx.query,ctx.querystring);
  ctx.body= ["111", "222", "333"]
})

// 更新
router.put('/:id',(ctx,next)=>{
console.log(ctx.params);
ctx.body= {
    ok:1,
    info: "替换用戶成功"
  }
})

// 删除
router.delete('/:id',(ctx,next)=>{
  ctx.body= {
    ok:1,
    info: "删除用戶成功"
  }
})

// 登录
router.post('/login',(ctx,next)=>{
  console.log(ctx.request.body);
  const {username,password}= ctx.request.body;
  console.log(username,password);
  if(username==='admin' && password==='123'){
    // 設置sessionId
    ctx.session.user= {
      username,
      password
    }
    ctx.body= {
      ok:1,
      info: "登录成功"
    }
  }
  else{
    ctx.body= {
      ok:0,
      info: "登录失败"
    }
  }
})

// 上传
router.post('/upload', upload.single("avatar"), async (ctx,next)=>{
  console.log(ctx.request.body, ctx.file);
  const avatar= ctx.file ? `/uploads/${ctx.file.filename}`
  : "/uploads/default.png";
  
  const {username,age,password}= ctx.request.body;
  // 使用user模型进行存儲操作
  await UserModel.create({
    username,
    age,
    password,
    avatar
  })
  ctx.body= {
    ok:1,
  }
})

module.exports= router;