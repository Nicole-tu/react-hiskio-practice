import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  // static defaultProps = { // 預設值(1)
  //   initCount: 0,
  // }
  // static propTypes = { // 型別(1)
  //   initCount: PropTypes.number
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: props.initCount,
  //   }
  // }

  state = {
    count: 0
  }

  addCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.addCount}>+1</button>
      </div>
    )
  }
}

Counter.defaultProps = { // 預設值(2)
  initCount: 0
}

Counter.propTypes = { // 型別(2)
  initCount: PropTypes.number
}

export default Counter;
