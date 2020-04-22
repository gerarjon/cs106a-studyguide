import React, { Component } from "react";
import Lectures from './pages/Lectures'
import Navbar from './components/Navbar';
import 'bulma/css/bulma.css'
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Lectures />
      </>
    );
  }
}

export default App;
