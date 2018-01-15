import React, { Component } from 'react';
import Rnd from 'react-rnd';

import './Block.css';

class Block extends Component {

	state={
		height: 100,
		width: 100
	};

  render() {
    return (
	    <Rnd
			  size={{width: this.state.width, height: this.state.height}}
			  className="block"
			  bounds="parent"
			  onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }); console.log(d.x, d.y); }}
			  onResize={(e, direction, ref, delta, position) => {
			    this.setState({
			      width: ref.offsetWidth,
			      height: ref.offsetHeight,
			      ...position,
			    });
			    console.log(ref.offsetWidth, ref.offsetHeight);
			  }}
			>
			  
			</Rnd>
    );
  }
}

export default Block;
