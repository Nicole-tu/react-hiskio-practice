import React from 'react';
import { Consumer } from '../context';
import ModalLoginForm from './ModalLoginForm';

const ModalLogin = () => (
  <Consumer>
    {({ setState }) => <div><h3>Login</h3><ModalLoginForm setState={setState} /></div>}
  </Consumer>
);

export default ModalLogin;
