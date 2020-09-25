import React, { Component } from 'react';
// import axios from 'axios';

// 為了要可以使用setState上面多包一層傳入

class ModalLoginForm extends Component {
  state = {
    username: '',
    password: '',
  };
  onChangeUsername = e => {
    this.setState({
      username: e.target.value,
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value,
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    // axios.post('/api/login', { username, password }).then(rs => {
    //   if (rs.data.success) {
    //     this.props.setState({
    //       modal: null,
    //       login: true,
    //     });
    //   }
    // });
    this.props.setState({
      modal: null,
      login: true,
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <form className="modal-login" onSubmit={this.onSubmit}>
        <input type="text" value={username} placeholder="username" onChange={this.onChangeUsername} />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={this.onChangePassword}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ModalLoginForm;
