import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { ExtraBass, Wifi, Wiless } from './views';

import './css/app.css';

const routes = [
  {
    path: "/ExtraBass",
    component: ExtraBass
  },
  {
    path: "/Wiless",
    component: Wiless
  },
  {
    path: "/Wifi",
    component: Wifi
  },
  // {
  //   path: "/wifi",
  //   component: ExtraBass,
  //   routes: [
  //     {
  //       path: "/wifi/bus",
  //       component: Wifi
  //     },
  //     {
  //       path: "/wifi/cart",
  //       component: Wiless
  //     }
  //   ]
  // }
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;