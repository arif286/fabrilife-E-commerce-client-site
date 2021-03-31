import { Home } from "@material-ui/icons";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
