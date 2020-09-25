import React, { Component } from 'react';
import './Header.css';
import { Consumer } from './context';

const Header = () => (
  <Consumer>
    {({ state, setState }) => (
      <div className="header">
        <h1>Modals</h1>
        <span>
          <a
            href=""
            onClick={e => {
              e.preventDefault();
              setState({ modal: 'promote' });
            }}
          >
            Promote
          </a>
        </span>
        <span className="login-btn">
          <a
            href=""
            onClick={e => {
              e.preventDefault();
              setState({ modal: 'login' });
            }}
          >
            Login
          </a>
        </span>
      </div>
    )}
  </Consumer>
);

export default Header;
