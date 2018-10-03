// server/router.js
import Router from 'koa-router';
import {matchRoutes} from 'react-router-config';
import render from './render';
import store from '../src/redux/store';
import Routes from '../src/router/Routes';

export default (async function createRouter() {
  const router = new Router();

  // View endpoints
  // router.get('/', async ctx => {
  //   ctx.body = 'Home';
  // });

  // // API endpoints
  // router.get('/api/comments', async ctx => {
  //   ctx.session.comments = ctx.session.comments || [];
  //   ctx.body = ctx.session.comments;
  // });

  // router.post('/api/comments', async ctx => {
  //   ctx.session.comments = ctx.session.comments || [];

  //   const comment = {
  //     date: new Date(),
  //     comment: ctx.request.body['comment'],
  //   };
  //   ctx.session.comments.push(comment);
  //   ctx.status = 201;
  //   ctx.body = comment;
  // });

  router.get('*', async ctx => {
    const actions = matchRoutes(Routes, ctx.url)
      .map(
        ({route}) =>
          route.component.fetching
            ? route.component.fetching({
                ...store,
                path: ctx.url,
              })
            : null
      )
      .map(
        async actions =>
          await Promise.all(
            (actions || []).map(
              p =>
                p &&
                new Promise(resolve =>
                  p.then(resolve).catch(resolve)
                )
            )
          )
      );

    await Promise.all(actions);
    const context = {};
    const content = await render(ctx.url, store, context);

    ctx.body = content;
  });
  return router;
});
