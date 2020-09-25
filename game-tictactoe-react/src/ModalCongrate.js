import React from 'react';
import { Modal } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const ModalCongrate = ({ winner }) => (

  Modal.confirm({
    title: 'End Game',
    icon: <SmileOutlined />,
    content: `Winner is ${winner}`,
    okText: 'Play Again',
    cancelText: 'Cancel',
  })

);
//https://ant.design/components/modal/
export default ModalCongrate;
