function renderStatus(url) {
  var urlList = ["/home", "/list", "/api/home", "/api/list"]
  return urlList.includes(url) ? 200 : 404
}

module.exports = { renderStatus }
