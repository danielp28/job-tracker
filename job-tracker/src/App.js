import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import NoMatch from "./pages/NoMatch"
import Nav from "./components/navbar/nav"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
