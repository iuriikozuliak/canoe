import Koa             from 'koa';
import Router          from 'koa-router';
import convert         from 'koa-convert';
import cors            from 'kcors';
import respond         from 'koa-respond';
import bodyParser      from 'koa-bodyparser';
import airlinesAPI         from 'api/airlines';
import airportsAPI         from 'api/airports';

export default async function createServer() {
  const app = new Koa();
  const router = new Router();

  app.use(respond());
  app.use(convert(cors()));
  app.use(bodyParser());

  airlinesAPI(router);
  airportsAPI(router);

  app.use(router.allowedMethods());
  app.use(router.routes());

  return app;
}