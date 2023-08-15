var Router = require('koa-router');
var router = new Router();

/* GET home page. */
router.get('/', async (ctx, next) => { 
  await ctx.render('upload', { title: 'Upload'});
});

module.exports= router