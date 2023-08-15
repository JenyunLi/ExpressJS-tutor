const Koa= require('koa');
const app= new Koa();
const router= require('./routes'); // 省略index.js

// 应用級

// 405 method not allowed
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('Koa server is starting at port 3000')
})