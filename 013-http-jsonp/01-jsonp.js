var http = require('http');
var url = require('url');

http.createServer((req, res) => {
  var urlobj = url.parse(req.url, true)
  console.log(urlobj.query);
  var cb= urlobj.query.callback
  switch (urlobj.pathname) {
    case '/api/aaa':
        res.end(`${cb}(${JSON.stringify({
          name: "kerwin",
          age: 100
        })})`)
      break;
    default:
      res.end("404")
  }
}).listen(5000)