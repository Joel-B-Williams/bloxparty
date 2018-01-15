import React, { Component } from 'react';
import Block from './Block';
import './Playpen.css';


class Playpen extends Component {

  render() {
    return (
      <div className="Playpen">
        <Block></Block>
      </div>
    );
  }
}

export default Playpen;
