import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "~/router/routes";

// import AsyncLoad from "../components/AsyncLoad";

// const AsyncHome = AsyncLoad({
//   loader: () => import(/* webpackChunkName: "reduxHome" */ "../pages/home/")
// });

// const AsyncReduxHome = AsyncLoad({
//   loader: () =>
//     import(/* webpackChunkName: "reduxHome" */ "../pages/reduxHome/")
// });

// const AsyncReduxHome2 = AsyncLoad({
//   loader: () =>
//     import(/* webpackChunkName: "reduxHome2" */ "../pages/reduxHome2/")
// });

const Routers = () => (
  <Switch>
    {/* <Route exact path="/" component={AsyncHome} />
    <Route path="/counter" component={AsyncReduxHome} />
    <Route path="/counter2" component={AsyncReduxHome2} /> */}
    {routes.map((route, i) => (
      <Route exact path={route.path} key={i} component={route.component} />
    ))}
    <Route render={() => <span>404</span>} />
  </Switch>
);

export default Routers;
