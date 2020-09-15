import React, { Component } from 'react';
import files from './files.json';
import './style.css';

import FileNode from './FileNode';

class App extends Component {
  render() {
    return (
      <div>
        <FileNode {...files} />
      </div>
    );
  }
}

export default App;
