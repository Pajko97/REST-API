import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Register from './routes/Register';


class App extends Component {
  constructor() {
    super();
      this.state = {
        users : [],
      }
}


  render() {
    return (
      <div className="App">
        <Register/>
      </div>
    );
  }
}

export default App;
