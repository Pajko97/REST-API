import React, { Component } from 'react'
import axios from 'axios';

class Users extends Component {
    constructor() {
        super();
        this.state={
            users: [],
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/players')
        .then(res => console.log(res.data))
        .then(res => this.setState({
            users:res.data
        }))
        .catch(Error)
    }
  
  render() {
      const users = this.state.users.map((user) => {
          <div key={user._id}>
            <p >{user.email}</p>
            </div>
    });
      let i = 1;
    return (
      <div className="users">
            {users}
      </div>
    )
  }
}

export default Users;