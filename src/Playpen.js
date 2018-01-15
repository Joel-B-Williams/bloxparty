import React, { Component } from 'react';
import Block from './Block';
import './Playpen.css';


class Playpen extends Component {

	state={
		blocks: []
	}

  render() {
    return (
      <div className="Playpen"></div>
    );
  }
}

export default Playpen;
