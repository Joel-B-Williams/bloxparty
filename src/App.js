import React, { Component } from 'react';
import logo from './logo.svg';
import Playpen from './Playpen';
import './App.css';

class App extends Component {

  state={
    playpen: [],
    toDo: 'Time to create a Playpen instance & display it'
  }

//   componentDidMount(){
// // call to db to get all of this playpen's blocks
// // editor's note - need to have an instance of playpen first
//   }

        // <Playpen></Playpen>
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.toDo}
        </p>
      </div>
    );
  }
}

export default App;
