const Koa= require('koa');
const Router= require('koa-router');

const app= new Koa();
const router= new Router();
// ctx=context

// 新增
router.post('/user',(ctx,next)=>{
    ctx.body= {
      ok:1,
      info: "新增用戶成功"
    }
})

// 获取
router.get('/user',(ctx,next)=>{
    ctx.body= ["111", "222", "333"]
})

// 更新
router.put('/user/:id',(ctx,next)=>{
  console.log(ctx.params);
  ctx.body= {
      ok:1,
      info: "替换用戶成功"
    }
})

// 删除
router.delete('/user/:id',(ctx,next)=>{
    ctx.body= {
      ok:1,
      info: "删除用戶成功"
    }
})

// 405 method not allowed
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('Koa server is starting at port 3000')
})