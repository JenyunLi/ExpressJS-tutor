var querystring= require("querystring")

// parse querystring 转成物件
var str="name=kerwin&age=100&location=dalian"
var obj=querystring.parse(str)
console.log(obj);

// stringify object 物件字串化
var myobj={
  a:1,
  b:2,
  c:3
}
var mystr= querystring.stringify(myobj)
console.log(mystr);

// escape, unescape 防止SQL注入

var str = 'id=3&city=北京&url=https://www.baidu.com'
var escaped = querystring.escape(str)
console.log(escaped)

var str = 'id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com'
var unescaped = querystring.unescape(str)
console.log(unescaped)