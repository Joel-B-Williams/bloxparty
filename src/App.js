import React, { Component } from 'react';
import logo from './logo.svg';
// import Playpen from './Playpen';
import './App.css';

class App extends Component {

  state={
    playpen: [],
    toDo: 'Time to create a Playpen instance & display it'
  }

  // this.newPlaypen = this.newPlaypen.bind(this);

  newPlaypen(e) {
    e.preventDefault();
    console.log("add a playpen");
    // need to POST a new playpen & make it the current state
    let playpenData = { name: this.refs.playpen_name.value };

    var request = new Request('http://localhost:3001/api/new-playpen', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(playpenData)
    });

    fetch(request)
    .then(function(response) {
      // console.log({response});
      response.json().then(function(data) {
        // console.log({data});
      });
    })
    .catch(function(err) {
      console.log('caught in app.js')
      console.log(err);
    });

  }

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
        <form ref="playpenForm">
          <input type="text" ref="playpen_name" placeholder="Playpen Name" />
          <button onClick={this.newPlaypen.bind(this)}> New Playpen </button>
        </form>
      </div>
    );
  }
}

export default App;
