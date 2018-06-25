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
      axios.get('/api/players/?lng=' +lng + '&lat=' +lat)
      .then((res) => this.setState({
        players: res.data
      }))
      
    }

  render() {
    let players = this.state.players;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="lng" placeholder="Enter longitude"/>
          <input type="text" name="lat" placeholder="Enter latitude"/>
          <button type="submit">Submit</button>
        </form>
        
        {
          
          players.map((player) => {
            return(
          <div>
            <p>{player.name}</p>
            <p>{player.rank}</p>
          </div>
            );
        })}
      </div>
    )
  }
}

export default Players;