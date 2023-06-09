var http = require("http")
const portNum = 5000
// Create server
http.createServer((req, res) => {
  // req: recieved parameters from browser
  // res: return render context
  // res.write("Hello world!\n")
  // res.write("hello again!")
  // res.end("[1,2,3]")
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.write(
`   <html>
      <b>hello 加粗的</b>
    </html>`
  )
  res.end()
}).listen(portNum, () => {
  console.log("server listening on port: " + portNum);
})