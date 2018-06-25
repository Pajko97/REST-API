import React, { Component } from 'react';
import './App.css';
import Players from './components/players/Players';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Players />
      </div>
    );
  }
}

export default App;
