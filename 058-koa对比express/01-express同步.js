const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => { 
  if (req.url === '/favicon.ico') {
    return res.end();
  } 
  console.log(11111);
  next();
  console.log(33333);
  res.send('Hello World!');
 })

app.use((req, res, next) => {
  console.log(22222);
});

 app.listen(port)