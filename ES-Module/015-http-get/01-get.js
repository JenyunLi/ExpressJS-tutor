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
        // client side, request data from Maoyan server
        httpGet((data)=>{
          res.end(data)
        })
      break;
    default:
      res.end("404")
  }
}).listen(5000)

function httpGet(cb){
  var data=""
  https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4`
  , res=>{
    res.on("data", (chunk) => { 
      data+= chunk
    })

    res.on("end", () => {
      console.log(data);
      cb(data)
      // aRes.end(data)
    }) 
  })
}