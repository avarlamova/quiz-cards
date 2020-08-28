import React, { Component } from 'react';

export default class Reset extends Component {

  reset() {
      localStorage.clear()
  }

  render() {
    return (
      <button 
      className = "btn btn-secondary"
      onClick = {this.reset}>
          Clear the list
      </button>
    );
  }
}
