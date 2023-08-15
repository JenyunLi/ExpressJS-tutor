const Router= require('koa-router');
const router= new Router();
// 新增
router.post('/',(ctx,next)=>{
  ctx.body= {
    ok:1,
    info: "新增list成功"
  }
})

// 获取
router.get('/',(ctx,next)=>{
  ctx.body= ["111", "222", "333"]
})

// 更新
router.put('/:id',(ctx,next)=>{
console.log(ctx.params);
ctx.body= {
    ok:1,
    info: "替换list成功"
  }
})

// 删除
router.delete('/:id',(ctx,next)=>{
  ctx.body= {
    ok:1,
    info: "删除list成功"
  }
})

module.exports= router;