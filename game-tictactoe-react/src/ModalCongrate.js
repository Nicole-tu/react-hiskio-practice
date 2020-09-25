import React from 'react';
import { Modal } from 'antd';
import { CoffeeOutlined, SmileOutlined } from '@ant-design/icons';

const ModalCongrate = ({ visible, winner, hideModal, playAgain }) => (

  <Modal
    title="Result"
    visible={visible}
    onOk={playAgain}
    onCancel={hideModal}
    okText="Play again"
    cancelText="Close"
  >
    {winner === '' ? <div><CoffeeOutlined /><span> End in a draw</span></div> : <div><SmileOutlined /><span> Winner is {winner}</span></div>}
  </Modal >
);

//https://ant.design/components/modal/
export default ModalCongrate;
