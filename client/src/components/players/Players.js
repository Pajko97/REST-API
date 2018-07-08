import React, { Component } from 'react';
import axios from 'axios';

class Players extends Component {
    constructor() {
        super();
          this.state = {
            players : [],
          }
    }


  render() {
    return (
      <div>
        <h2>Players</h2>
      </div>
    )
  }
}

export default Players;