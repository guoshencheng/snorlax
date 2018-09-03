const Router = require('koa-router');

const router = new Router();

router.get('*', () => {
  return 'hello world'
})

module.exports = router;
