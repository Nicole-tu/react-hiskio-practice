import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    filter: '',
    lessons: []
  }
  componentDidMount() {
    this.fetchLessons();
  }
  onChangeFilter = e => {
    const filter = e.target.value;
    this.setState({
      filter
    }, this.fetchLessons)
  }
  fetchLessons = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const { filter } = this.state;
      fetch(`/api/lessons?filter=${filter}`).then(rs => rs.json()).then(lessons => this.setState({ lessons }))
    }, 300);// debounce
  }
  render() {
    const { filter, lessons } = this.state;
    return (
      <div className="container">
        <div className="content">
          <fieldset class="field-container">
            <input className="search-input" value={filter} onChange={this.onChangeFilter} />
          </fieldset>
          <ul className="rectangle-list">
            {lessons.map(lesson => (<li key={lesson.id}><a href>{lesson.title}</a></li>))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
