var http = require('http');
var https = require('https');
var url = require('url');

http.createServer((req, res) => {
  var urlobj = url.parse(req.url, true)
  // console.log(urlobj.query);
  res.writeHead(200, {
    "content-type": "application/json; charset=utf-8",
    // cors headers:
    "access-control-allow-origin": "*"
  })

  switch (urlobj.pathname) {
    case '/api/aaa':
        // client side, request data from 小米有品 server
        httpPost((data)=>{
          res.end(data)
        })
      break;
    default:
      res.end("404")
  }
}).listen(5000)

function httpPost(cb){
  var data=""
  var options={
    hostname: "m.xiaomiyoupin.com",
    port: 443,
    path: "/mtop/market/search/placeHolder",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "content-Type": "application/x-www-form-urlencoded"
    }
  }
  // 發出Post
  var req= https.request(options,(res) => { 
    res.on("data", chunk => {
      data += chunk
    })     
    res.on("end",()=>{
      console.log(data);
      cb(data)
    })
  })  
    
  // req.write("name=kerwin&age=2")
  req.write(JSON.stringify([{},{"baseParam":{"ypClient":1}}])) 
  req.end()
}