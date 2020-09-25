import React from 'react';
import { Consumer } from '../context';

const ModalPromote = () => (
  <Consumer>
    {() => (
      <div>
        <h2>Popup modal</h2>
        <p>
          Use Context API to popup the modals
        </p>
      </div>
    )}
  </Consumer>
);

export default ModalPromote;
