const Router= require('koa-router');
const userRouter= require('./user.js');
const listRouter= require('./list.js');
const homeRouter= require('./home.js');
const loginRouter= require('./login.js');
const uploadRouter= require('./upload.js')
const router= new Router();

// 統一加前綴
// router.prefix('/api');

// 注冊路由級中间件
router.use('/user',userRouter.routes(),userRouter.allowedMethods());
router.use('/list',listRouter.routes(),listRouter.allowedMethods());
router.use('/home', homeRouter.routes(), homeRouter.allowedMethods());
router.use('/login', loginRouter.routes(), loginRouter.allowedMethods());
router.use('/upload', uploadRouter.routes(), uploadRouter.allowedMethods());
router.redirect("/","/home")

module.exports= router;