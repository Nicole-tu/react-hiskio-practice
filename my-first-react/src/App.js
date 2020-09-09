import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 1
  };

  onClick = () => {
    console.log(1);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>{this.state.count}</div>
          <button onClick={this.onClick}>click</button>
        </header>
      </div>
    );
  }
}

export default App;
