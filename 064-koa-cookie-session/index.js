const Koa= require('koa');
const app= new Koa();
const static= require('koa-static');
const path = require('path');
const router= require('./routes'); // 省略index.js
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const session= require('koa-session-minimal')
// 应用級
app.use(bodyParser()); // 处理post表单參数
app.use(static(path.join(__dirname,'./public')))

// 配置模板引擎
app.use(views(path.join(__dirname,'./views'), {
  extension: 'ejs'
}))

// session配置
app.use(session({
  key: 'KenSessionID',
  cookie: {
    maxAge: 1000 * 60 * 60 
  }
}))

// session判斷拦截
app.use(async (ctx,next)=>{
  // 排除login相关的路由和接口
  // if(ctx.path === '/login'){
  if(ctx.url.includes('login')){
    await next()
    return
  }
  // 判断session
  if(ctx.session.user){
    // 重新设置session过期时间
    ctx.session.mydate= Date.now()
    await next()
  } else {
    ctx.redirect('/login')
  }
})

// 405 method not allowed
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('Koa server is starting at port 3000')
})