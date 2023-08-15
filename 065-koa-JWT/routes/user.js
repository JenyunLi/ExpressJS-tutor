const Router= require('koa-router');
const JWT= require('../util/JWT');
const router= new Router();
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
  // console.log(ctx.request.body);
  const {username,password}= ctx.request.body;
  console.log(username,password);
  if(username==='admin' && password==='123'){
    // 設置header
    const token = JWT.generate({
      _id: '111',
      username: 'kerwin',
    }, "1d");
    // console.log('token', token);
    // token返回在header
    ctx.set("authorization", token);
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

module.exports= router;