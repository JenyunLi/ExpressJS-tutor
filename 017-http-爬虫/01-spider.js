var http = require('http');
var https = require('https');
var url = require('url');
var cheerio = require('cheerio');

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
          res.end(spider(data))
        })
      break;
    default:
      res.end("404")
  }
}).listen(5000)

function httpGet(cb){
  var data=""
  https.get(`https://i.maoyan.com`, res=>{
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

function spider(data) {
  // cheerio to parse html
  let $ = cheerio.load(data)
  let $movieslist= $(".column.content")
  // console.log($movieslist);
  let movies = []
  $movieslist.each((index, item) => {
    movies.push({
      title:$(item).find(".title").text(),
      grade:$(item).find(".grade").text(),
      actor:$(item).find(".actor").text()
    })
  })
  console.log(movies);
  return JSON.stringify(movies)
} 