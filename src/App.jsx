import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import Exercises from "./screens/Exercises";
import Challenge from "./screens/Challenge";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app h-100">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/challenge">
              <Challenge />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/exercises" component={Exercises} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
