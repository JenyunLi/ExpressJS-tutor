const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => { 
  if (req.url === '/favicon.ico') {
    return res.end();
  } 
  console.log(11111);
  next();

 })

app.use(async (req, res, next) => {
  console.log(22222);
  // 异步
  await delay(1000)
  res.token= "asfasdf"
  console.log(33333);
  console.log(44444, res.token);
  res.send('Hello World!');
});

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
}

 app.listen(port)