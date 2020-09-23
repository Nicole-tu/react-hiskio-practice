import React, { Component } from 'react';
import { render } from 'react-dom';

class ModalLogin extends Component {
  state = {
    username: '',
    password: ''
  }
  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    axios.post('/api/login', { username, password }).then(rs => rs.json())
  };
  render() {
    return (
      <form className="modal-login" onSubmit={this.onSubmit} >
        <input type="text" />
        <br />
        <input type="password" />
      </form >
    )
  }
}

export default ModalLogin;
