import React, { Component } from 'react';
import axios from 'axios';

class Players extends Component {
    constructor() {
        super();
        this.state = {
            players : [],
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(e) {
      e.preventDefault();
      var lng = e.target.elements.lng.value;
      var lat = e.target.elements.lat.value;

      axios.get('/api/igraci/')
      .then((res) => this.setState({
        players: res.data
      }))
      
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