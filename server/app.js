// server/app.js
import assert from 'assert';
import path from 'path';
import Koa from 'koa';
import logger from 'koa-logger';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import statics from 'koa-static';
import createRouter from './router';

export default (async function createApp() {
  const app = new Koa();

  // Add some assertions required in a production environment
  if (process.env.NODE_ENV === 'production') {
    // assert(
    //   process.env.SECRET_KEY,
    //   'Please set SECRET_KEY env variable.'
    // );
  }
  app.keys = [process.env.SECRET_KEY || 'SECRET_KEY'];

  // Add middleware
  app.use(logger());
  app.use(bodyParser());
  app.use(
    statics('build', {
      extensions: ['css', 'js'],
    })
  );
  app.use(session({}, app));

  // TODO: Error handling

  // Add routes
  const router = await createRouter();
  app.use(router.routes());

  return app;
});
