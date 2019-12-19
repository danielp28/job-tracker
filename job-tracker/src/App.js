import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Secret from "./pages/Secret"
import NoMatch from "./pages/NoMatch"
import Callback from "./pages/Callback"
import Navbar from "./components/navbar/nav"

function App(props) {
  return (
    <Router>
      <div>
      <Navbar {...props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/secret" component={Secret} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}




export default App;
