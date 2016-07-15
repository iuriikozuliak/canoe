import fs          from 'fs';
import Koa         from 'koa';
import Router      from 'koa-router';
import convert     from 'koa-convert';
import serve       from 'koa-static';
import cors        from 'kcors';
import respond     from 'koa-respond';
import bodyParser  from 'koa-bodyparser';
import airlinesAPI from 'api/airlines';
import airportsAPI from 'api/airports';
import searchAPI   from 'api/search';

export default async function createServer() {
  const app    = new Koa();
  const router = new Router();

  app.use(respond());
  app.use(convert(cors()));
  app.use(bodyParser());

  airlinesAPI(router);
  airportsAPI(router);
  searchAPI(router);

  router.get('/', (ctx) => {
    ctx.type = 'html';
    ctx.status = 200;
    ctx.body = fs.createReadStream('./client/index.html');
  });

  app.use(router.allowedMethods());
  app.use(router.routes());

  app.use(serve('./dist'))

  return app;
}