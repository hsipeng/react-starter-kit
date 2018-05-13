import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'view/home';
import Hello from 'view/hello';
import NotFound from 'view/notFound';
import Cavans from 'view/d3/cavans.jsx';
import Svg from 'view/d3/svg.jsx';
// import Loadable from 'react-loadable'

// //  按需加载
// const MyLoadingComponent = ({isLoading, error}) => {
//     // Handle the loading state
//     if (isLoading) {
//       return <div>Loading...</div>;
//     }
//     // Handle the error state
//     else if (error) {
//       return <div>Sorry, there was a problem loading the page.</div>;
//     }
//     else {
//       return null;
//     }
//   };

//   const AsyncHome = Loadable({
//     loader: () => import('view/home'),
//     loading: MyLoadingComponent
//   });

//   const AsyncHello = Loadable({
//     loader: () => import('view/hello'),
//     loading: MyLoadingComponent
//   });

export default () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/hello" component={Hello}/>
        <Route path="/cavans" component={Cavans}/>
        <Route path="/svg" component={Svg}/>
        <Route path="*" component={NotFound}/>
    </Switch>
)
