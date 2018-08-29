var Router = require('koa-router');

const router = new Router();

router.get('*', (ctx, next) => {
  return 'hello world'
})

module.exports = router;
