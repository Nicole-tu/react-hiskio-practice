import React, { Component } from 'react';

class Child extends Component {
  state = {
    count: 0
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Child:{this.state.count}</h1>
        <button onClick={this.props.addParentCount}>+ Parent</button>
        <button onClick={this.addCount}>+ Child</button>
      </div>
    );
  }
}

export default Child;
