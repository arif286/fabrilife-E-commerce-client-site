import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/addEvent">
            <AddEvent />
          </Route>
          <Route path='productDetails/:id'>
            <CheckOut/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
