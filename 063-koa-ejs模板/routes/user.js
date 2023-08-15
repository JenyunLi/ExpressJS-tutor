const Router= require('koa-router');
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

module.exports= router;