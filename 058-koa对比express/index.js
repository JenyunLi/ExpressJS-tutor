const Koa= require('koa');
const app= new Koa();

// ctx=context
app.use(async (ctx, next)=>{
  console.log(ctx.request.path);
  ctx.body= '<b>Hello World</b>'
  // ctx.body= {name:'John'}
})

app.listen(3000,()=>{
    console.log('Koa server is starting at port 3000')
})