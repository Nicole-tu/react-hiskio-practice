import React, { Component } from 'react';
import Item from './Item';

// (1)

class List extends Component {
  render() {
    return (
      <ol>
        <Item text="Learn Jabvascript" price={100} />
        <Item text="Learn React" price="100" />
        <Item text="Make money" />
      </ol>
    )
  }
}

// (2) 陣列用map

const steps = [
  'Learn Jabvascript',
  'Learn React',
  'Make money'
]

class List extends Component {
  render() {
    return (
      <div>
        {steps.map(
          (text, index, array) => (
            <Item>
              {test}({index})
            </Item>
          )
        )}
      </div>
    )
  }
}

// (3) 物件用Object.keys

const info = {
  name: 'React Lesson',
  price: 3200
}

// 需要順序的話要包成物件陣列
const info = [{ label: 'name', data: 'React Lesson' }, { label: 'price', data: 3200 }]

info.map()

class List extends Component {
  render() {
    return (
      <div>
        {Object.keys(info).map(key => {
          const value = info[key];
          return (
            <Item>
              {key}:{value}
            </Item>
          )
        })}
      </div>
    )
  }
}

export default List;
