import React, { Component } from 'react';
import './materialize.min.css';
import NavBar from './NavBar';
import Experiment from './Experiment';

class App extends Component {
  render () {
    return (
      <div className="App">
        <NavBar/>
        <Experiment/>
      </div>
    );
  }
}

export default App;
