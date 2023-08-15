const Router = require('koa-router');
const router = new Router();
// 新增
router.get('/', async (ctx, next) => {
  // 荻取cookie
  // console.log(ctx.cookies.get('name'));
  // 设置cookie
  // ctx.cookies.set('location', 'shanghai')

  // 自动找views/home.ejs
  await ctx.render('home', { username: '小明', age: 18 })
})

// 列表
router.get('/list', (ctx, next) => {
  ctx.body = [{
    _id: 1,
    username: '小明',
    age: 18
  },
  {
    _id: 2,
    username: '小華',
    age: 20
  },
  {
    _id: 3,
    username: '小強',
    age: 16
  },
  ]
})

module.exports = router;