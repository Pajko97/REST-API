import React, { Component } from 'react';
import axios from 'axios';

class Players extends Component {
    constructor() {
        super();
        this.state = {
            players : []
        }
    }
    componentDidMount() {
        axios.get('/api/players')
        .then((players) => console.log(players))
        .catch(error)
    }
  render() {
    return (
      <div>
        <h1>Igraci</h1>
      </div>
    )
  }
}

export default Players;