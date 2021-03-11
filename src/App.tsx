import React from "react";
import MyBoard from "./MyBoard";
import routes from "./routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className='box'>
        <MyBoard />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;


