import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import Router from '../src/router';
import path from 'path';
import fs from 'fs';

const indexFile = path.resolve('./build/index.html');

export default (pathname, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={pathname} context={context}>
        <Router />
      </StaticRouter>
    </Provider>
  );

  return new Promise((resolve, reject) => {
    fs.readFile(indexFile, 'utf8', (err, indexData) => {
      if (err) {
        console.error('Something went wrong:', err);
        reject();
      }
      resolve(
        indexData.replace(
          '<div id="app"></div>',
          `<div id="app">${content}</div><script>
        window.INITIAL_STATE = ${JSON.stringify(
          store.getState()
        )}
      </script>`
        )
      );
    });
  });
};
