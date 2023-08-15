var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var uploadRouter = require('./routes/upload');
var chatRouter = require('./routes/chat');

// 引入session模組
var session = require('express-session');
const MongoStore = require('connect-mongo');
const JWT = require('./util/JWT');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 注冊session中間件
// app.use(session({
//   name: 'kerwinsystem',
//   secret: 'ge3gga3637673',
//   cookie: { 
//     // 為true則要求https才能訪問cookie
//     secure: false,
//     maxAge: 1000 * 60 * 60 // 1小時
//   },
//   // 重新設置session, 以免cookie超時
//   resave: true,
//   // 強制為初始化的session存儲
//   saveUninitialized: true,
//   // rolling為true表示在超時前刷新, cookie會重新計時, 默認為true
//   // rolling: true
//   store: MongoStore.create({
//     // 创建一个数据庫 kerwin_session
//     mongoUrl: 'mongodb://localhost:27017/kerwin_session',
//     ttl: 1000*60 *10 // 过期时间: 10分鐘
//   })
// }))

// 設置中間件
app.use((req, res, next) => {
  // 排除login相关的路由和接口, 否則會出現訪問次数過多的錯誤
  if (req.url.includes("login")) {
    next()
    return
  }

  // 解密token
  
  // 先/ , 后/api/users
  // console.log(req.path); 
  // 先/ undefinded , 后/api/users得到token
  // console.log(req.headers["authorization"]?.split(" ")[1]);
  const token = req.headers["authorization"]?.split(" ")[1]
  // 得到為Bearer null
  // console.log(req.headers["authorization"]);
  if (token) {
    const payload = JWT.verify(token)
    // console.log("payload", payload);
    if (payload) {
      // 重新計算token过期時間
      const newToken = JWT.generate({
        _id: payload._id,
        username: payload.username,
      }, "1h")
      res.header("Authorization", newToken)
      // 重新设置toke
      next()
    } else {
      res.status(401).send({errCode:-1, errMsg:"token过期"})
    }
  } else {
    next()
  } 
   
  // session过期校驗
  // if (req.session.user) {
  //   // 重新設置session, 使过期时间變長    
  //   req.session.mydate= Date.now()
  //   next()
  // } else {
  //   // 是接口，返回錯誤碼
  //   // 若否則重定向
  //   if (req.url.includes("api")) {
  //     res.status(401).send({ok:0})
  //   } else
  //     res.redirect('/login')
  // }
})

app.use('/home', indexRouter);
app.use('/api', usersRouter);
app.use('/login', loginRouter);
app.use('/upload', uploadRouter);
app.use('/chat', chatRouter);

// app.get('/home', (req, res) => {
//   res.send('home')
// }

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;