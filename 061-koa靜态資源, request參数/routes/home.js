const Router= require('koa-router');
const router= new Router();
// 新增
router.get('/',(ctx,next)=>{
  ctx.body= `
  <html>
    <h1>home頁面</h1>
  </html>
  `
})

module.exports= router;