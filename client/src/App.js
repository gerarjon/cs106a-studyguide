import React, { Component } from "react";
import Lectures from './pages/Lectures'
import 'bulma/css/bulma.css'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lectures />
      </div>
    );
  }
}

export default App;
