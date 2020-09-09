import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.text}({this.props.price + 1})</li>
    )
  }
}

export default Item;
