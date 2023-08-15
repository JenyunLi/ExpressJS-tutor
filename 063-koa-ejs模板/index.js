const Koa= require('koa');
const app= new Koa();
const static= require('koa-static');
const path = require('path');
const router= require('./routes'); // 省略index.js
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');

// 应用級
app.use(bodyParser()); // 处理post表单參数
app.use(static(path.join(__dirname,'./public')))

// 配置模板引擎
app.use(views(path.join(__dirname,'./views'), {
  extension: 'ejs'
}))

// 405 method not allowed
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('Koa server is starting at port 3000')
})