import React, { Component } from 'react';
import './App.css';
import Players from './components/players/Players';


class App extends Component {
  state = {users : []}

  componentDidMount() {
    fetch('/players')
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
