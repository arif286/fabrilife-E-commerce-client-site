import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header/Header";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
