import React, { Component } from 'react';
import Header from './Header';
import Modal from './modal/Modal';
import './App.css';
import { Provider } from './context';

class App extends Component {
  state = {
    modal: null,
    login: false,
  };
  render() {
    const contextValue = {
      state: this.state,
      setState: this.setState.bind(this),
    };
    return (
      <Provider value={contextValue}>
        <div className="app">
          <Header />
          <Modal />
        </div>
      </Provider>
    );
  }
}

export default App;
