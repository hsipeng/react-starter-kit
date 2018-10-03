import '@babel/polyfill';
import express from 'express';
import {matchRoutes} from 'react-router-config';
import render from './render';
import store from '../src/redux/store';
import Routes from '../src/router/Routes';

const PORT = process.env.PORT || 8079;
const app = express();

app.use('/assets', express.static('build/assets'));
app.get('*', async (req, res) => {
  const actions = matchRoutes(Routes, req.path)
    .map(
      ({route}) =>
        route.component.fetching
          ? route.component.fetching({
              ...store,
              path: req.path,
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
  const content = await render(req.path, store, context);

  res.send(content);
});

app.listen(PORT, () =>
  console.log(`Frontend service listening on port: ${PORT}`)
);