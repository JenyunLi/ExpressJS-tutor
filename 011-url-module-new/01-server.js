var http = require("http");
var url = require("url");
const { fileURLToPath, urlToHttpOptions } = require("url");

const { renderStatus } = require("./module/renderStatus");
const { renderHTML } = require("./module/renderHTML");

const portNum = 5000
// Create server
var server = http.createServer()
server.on("request", (req, res) => {

  if (req.url === "/favicon.ico") {
    return
  }

  // var urlobj=url.parse(req.url,true)
  // var path = urlobj.pathname
  // console.log(urlobj.query.name, urlobj.query.age);

  const myURL= new URL(req.url,'http://localhost:3000')
  console.log(myURL);

  for(var [key,value] of myURL.searchParams){
    console.log(key,value);
  }
  path = myURL.pathname

  res.writeHead(renderStatus(path), { 'Content-Type': 'text/html; charset=utf-8' })
  res.write(renderHTML(path))
  res.end()
})

server.listen(portNum, () => { 
  console.log("server listening on port: " + portNum);
})

var a= new URL('one/two/three/', 'http://example.com')
console.log(a.href);

const myUrl= new URL('http://a.b@測試#gas')
// console.log(url.format(myUrl, {unicode: true, auth:false, fragment:false, search:false}));
console.log(urlToHttpOptions(myUrl));

// const filename='file://c://你好.txt'
// console.log(new URL(filename).pathname) // 錯誤：%2D%A0...txt
// console.log(fileURLToPath(filename))// 正確：你好.txt
