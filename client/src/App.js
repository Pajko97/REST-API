import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Register from './routes/Register';
import Users from './routes/Users';


class App extends Component {
 



  render() {
    return (
      <div className="App">
        <Register/>
        <Users/>
      </div>
    );
  }
}

export default App;
