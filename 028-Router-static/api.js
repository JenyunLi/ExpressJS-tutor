function render(res, data, type = "") {
  res.writeHead(200, {
    "Content-Type":
      `${type ? type : "application/json"};charset=utf-8`
  })
  res.write(data)
  res.end()
}

const apiRouter = {
  "/api/login": (req, res) => {
    // 获取參数
    const myURL = new URL(req.url, 'http://localhost')
    var username= myURL.searchParams.get('username')
    var password = myURL.searchParams.get('password')
    console.log(username, password);
    if (username == "admin" && password == "123") {
      render(res, `{"ok":1}`)
    } else {
      render(res, `{"ok":0}`)
    }
    // 驗證
  },
  "/api/loginpost": (req, res) => {
    // 获取參数
    var post=""
    req.on('data', (chunk) => {
      console.log(chunk.toString());
      post += chunk
    })

    req.on('end', () => {
      console.log(post);
      var obj = JSON.parse(post)
      // console.log(obj.username, obj.password);
      var username = obj.username
      var password = obj.password
      if (username == "admin" && password == "123") {
        render(res, `{"ok":1}`)
      } else {
        render(res, `{"ok":0}`)
      }
    })
  }
}

module.exports = apiRouter