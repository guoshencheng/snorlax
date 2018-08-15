const Koa = require('koa');
const app = new Koa();

// 响应
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

module.exports = app;
