import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
    constructor() {
      super();

      this.state = {
        users: ''
      }
    }

   
    
    onSubmit(e) {
        e.preventDefault();

       
        let email = e.target.elements.email.value;
        let steamName = e.target.elements.steamname.value;
        let password = e.target.elements.password.value;
        let rank = e.target.elements.rank.value;
        
        const body = {
            email: email,
            steamName: steamName,
            password : password,
            rank: rank
        }

        console.log(body);

         axios.post('http://localhost:8080/api/players', body)
         .catch(Error)

         
     }
  
   render() {
     let users = this.state.users;
    return (
      <div className= "register">
        <form onSubmit={this.onSubmit}>
            <input type="text" name= "email" required="true"></input>
            <label htmlFor="email">Email</label>
            <input type="text" name= "steamname" required="true"></input>
            <label htmlFor="steamname">Steam Name</label>
            <input type="password" name= "password" required="true"></input>
            <label htmlFor="password">Password</label>
            <input type="text" name= "rank" required="true"></input>
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select> 
            <button type ="submit">Submit</button>
        </form>

   
   
      </div>
    )
  }
}

export default Register;
