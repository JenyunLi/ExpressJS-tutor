// config mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kerwin_koa');
// 插入集合和数据，数据庫kerwin_koa，如果不存在会自动创建

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));