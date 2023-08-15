const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use((ctx, next) => {
  if (ctx.url === '/favicon.ico') {
    return res.end();
  }
  console.log(11111);
  next();
  console.log(33333);
  ctx.body = 'Hello World!';
})

app.use((ctx, next) => {
  console.log(22222);
});

app.listen(port)