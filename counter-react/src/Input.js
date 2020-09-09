import React, { Component, createRef } from 'react';

class Input extends Component {

  // (1)
  componentDidMount() { // component第一次加到頁面上
    this.refs.myInput.focus();
  }

  // (2)
  componentDidMount() {
    this.myInput.focus();
  }

  setRef = (input) => {
    this.myInput = input;
  }

  // (3)
  setRef = (input) => {
    input.focus();
  }

  // (4)官方建議
  myInput = createRef();

  componentDidMount() {
    this.myInput.current.focus();
  }


  render() {
    return (
      <div>
        <h3>Enter your name</h3>
        <input type="text" ref="myInput" /> {/* (1) */}
        <input type="text" ref={this.setRef} /> {/* (2),(3) */}
        <input type="text" ref={this.myInput} /> {/* (4) */}

      </div>
    )
  }
}

export default Input;
