import React, { Component } from 'react';
import logo from './logo.svg';
import Playpen from './Playpen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          I should have a single Blox in play now
        </p>
        <Playpen></Playpen>
      </div>
    );
  }
}

export default App;
