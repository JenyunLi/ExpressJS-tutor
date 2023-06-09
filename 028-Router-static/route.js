const fs = require('fs')
const path = require('path')
const mime = require('mime')

function render(res,path, type="") {
  res.writeHead(200, { "Content-Type": `${type?type:"text/html"};charset=utf-8` })
  res.write(fs.readFileSync(path, "utf-8"))
  res.end()
}

const route = {
  "/login": (req,res) => {
    render(res,"./static/login.html", "utf-8")
  },
  "/": (req,res) => {
    render(res, "./static/home.html", "utf-8")
  },
  "/home": (req,res) => {
    render(res, "./static/home.html", "utf-8")
  },
  "/404": (req,res) => {
    if (readStaicFile(req, res)) {
      return
    } 
    res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" })
    res.write(fs.readFileSync("./static/404.html", "utf-8"))
    res.end()  
  },
}

// get static file
function readStaicFile(req,res) {
  // get url
  let url = new URL(req.url, "http://localhost:3000")
  let pathname = path.join(__dirname, "/static", url.pathname);
  // if (url.pathname==="/") {
  //   return false
  // }
  if (fs.existsSync(pathname)) {
    // path.extname
    render(res, pathname, mime.getType(pathname))
    return true
  } else {
    return false
  }
}

module.exports = route;