const Koa = require('koa');
const router = require('./routes');

const app = new Koa();

app.use(async (ctx, next) => {
  const result = await next();
  ctx.body = {
    data: result,
  };
})

app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
