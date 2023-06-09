const fs = require('fs')

// function route(res, pathname) {
//   switch (pathname) {
//     case '/':
//       res.end("index")
//       break;
//     case '/login':

//       break;
//     case '/home':

//       break;
//     default:

//       break;
//   }
// }
function render(res,path, type="") {
  res.writeHead(200, { "Content-Type": `${type?type:"text/html"};charset=utf-8` })
  res.write(fs.readFileSync(path, "utf-8"))
  res.end()
}

const route = {
  "/login": (req,res) => {
    render(res,"./static/login.html", "utf-8")
    // res.end("login")
  },
  "/home": (req,res) => {
    render(res, "./static/home.html", "utf-8")
    // res.end("home")
  },
  "/404": (req,res) => {
    res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" })
    res.write(fs.readFileSync("./static/404.html", "utf-8"))
    res.end()  
  },
  "/favicon.ico":(req,res) => { 
    render(req,res, "./static/favicon.ico","image/x-icon")
    // res.end()
  }
}

module.exports = route;