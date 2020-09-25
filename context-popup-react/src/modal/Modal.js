import React, { Component } from 'react';
import { Consumer } from '../context';
import ModalLogin from './ModalLogin';
import './Modal.css';
import ModalPromote from './ModalPromote';

class Modal extends Component {
  renderContent = (modal) => {
    switch (modal) {
      case 'login': return <ModalLogin />;
      case 'promote': return <ModalPromote />;
      default: return null;
    }
  }
  render() {
    return (
      <Consumer>
        {({ state, setState }) => {
          const { modal } = state;
          if (!modal) return null;
          const onClose = () => {
            setState({
              modal: null,
              login: false,
            })
          };
          return (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {this.renderContent(modal)}
              </div>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default Modal;
