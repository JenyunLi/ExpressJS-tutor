// 引入 mysql 模組
var mysql = require('mysql2');
// 建立連線
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mdb',
  database: 'app'
});

module.exports = connection;