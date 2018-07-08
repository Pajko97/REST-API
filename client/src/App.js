import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Players from './components/players/Players';


class App extends Component {
  state = {users : []}

  componentDidMount() {
    axios.get('http://localhost:8080/api/Players')
      .then(res => console.log(res))
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <Players />
      </div>
    );
  }
}

export default App;
