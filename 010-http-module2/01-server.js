var http = require("http");
var url = require("url");
const { renderStatus } = require("./module/renderStatus");
const { renderHTML } = require("./module/renderHTML");

const portNum = 5000
// Create server
var server = http.createServer()
server.on("request", (req, res) => {
// http.createServer((req, res) => {
  // req: recieved parameters from browser
  // res: return render context
  // res.write("Hello world!\n")
  // res.write("hello again!")
  // res.end("[1,2,3]")
  if (req.url === "/favicon.ico") {
    return
  }

  var urlobj=url.parse(req.url,true)
  var path = urlobj.pathname
  console.log(urlobj.query.name, urlobj.query.age);

  res.writeHead(renderStatus(path), { 'Content-Type': 'text/html; charset=utf-8' })
  res.write(renderHTML(path))
  res.end()
// }).listen(portNum, () => {
//   console.log("server listening on port: " + portNum);
})

server.listen(portNum, () => { 
  console.log("server listening on port: " + portNum);
})

var a=url.resolve('one/two/three/', 'four')
console.log(a);