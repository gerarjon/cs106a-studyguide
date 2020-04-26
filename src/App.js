import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Lectures from './pages/Lectures';
import Assignments from './pages/Assignments';
import Navbar from './components/Navbar';
import 'bulma/css/bulma.css'
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Lectures}>
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/assignments'} component={Assignments}>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
