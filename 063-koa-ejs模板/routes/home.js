const Router= require('koa-router');
const router= new Router();
// 新增
router.get('/', async(ctx,next)=>{
  // 自动找views/home.ejs
  await ctx.render('home', {username: '小明', age: 18})
})

module.exports= router;