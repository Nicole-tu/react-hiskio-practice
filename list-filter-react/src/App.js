import React, { Component } from 'react';
import lessons from './lessons.json';
import './App.css';

class App extends Component {
  state = {
    filter: '',
    lessons
  }
  onChangeFilter = e => {
    this.setState({
      filter: e.target.value
    })
  }
  render() {
    const { filter, lessons } = this.state;
    const visibleLessons = lessons.filter(lesson =>
      lesson.title.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div className="container">
        <div className="content">
          <fieldset class="field-container">
            <input className="search-input" value={filter} onChange={this.onChangeFilter} />
          </fieldset>
          <ul className="rectangle-list">
            {visibleLessons.map(lesson => (<li key={lesson.id}><a href>{lesson.title}</a></li>))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
