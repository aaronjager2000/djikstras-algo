import React, {Component} from "react";

import './Node.css';

export default class Node extends Component {
    render() {
      // Destructuring props for easy access
      const {
        col,
        isFinish,
        isStart,
        isWall,
        onMouseDown,
        onMouseEnter,
        onMouseUp,
        row,
      } = this.props;
  
      // Determine additional class name based on node type
      const extraClassName = isFinish
        ? 'node-finish'
        : isStart
        ? 'node-start'
        : isWall
        ? 'node-wall'
        : '';
  
      // Render the node with appropriate class and event handlers
      return (
        <div
          id={`node-${row}-${col}`}
          className={`node ${extraClassName}`}
          onMouseDown={() => onMouseDown(row, col)} // Mouse down event handler
          onMouseEnter={() => onMouseEnter(row, col)} // Mouse enter event handler
          onMouseUp={() => onMouseUp()} // Mouse up event handler
        ></div>
      );
    }
  }