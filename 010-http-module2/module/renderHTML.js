function renderHTML(url) {
  switch (url) {
    case "/api/home":
      return "['map','pen','paper']"
    case "/api/list":
      return "[11,22,33]"
    case "/home":
      return `   <html>
      home頁面
    </html>`

    case "/list":
      return `   <html>
      <b>List 加粗的</b>
    </html>`

    default:
      return `   <html>
      <b>404 not found</b>
    </html>`

  }
}

exports.renderHTML= renderHTML
