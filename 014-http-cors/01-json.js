var http = require('http');
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
        res.end(`${JSON.stringify({
          name: "kerwin",
          age: 100
        })}`)
      break;
    default:
      res.end("404")
  }
}).listen(5000)