import React, { Component } from 'react';
import Card from './Card';
import lesson from './lesson-react.json';
import lesson2 from './lesson-vue.json';
class App extends Component {
  render() {
    return (
      <div>
        <Card data={lesson} />
        <Card data={lesson2} />
      </div>
    );
  }
}

export default App;
