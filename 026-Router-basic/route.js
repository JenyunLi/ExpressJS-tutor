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

const route = {
  "/login": (res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
    res.write(fs.readFileSync("./static/login.html", "utf-8"))
    res.end("login")
  },
  "/home": (res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
    res.write(fs.readFileSync("./static/home.html", "utf-8"))
    res.end("home")
  },
  "/404": (res) => {
    res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" })
    res.write(fs.readFileSync("./static/404.html", "utf-8"))
    res.end("404")
  }
}

module.exports = route;