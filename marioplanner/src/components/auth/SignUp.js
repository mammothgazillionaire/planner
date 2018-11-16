import React, { Component } from 'react'

export default class SignUp extends Component {

  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text">form</h5>
          <div className="input-field">
            <label htmlFor="Email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
           <div className="input-field">
            <label htmlFor="firstName">firstName</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">lastName</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="Email">password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Signup</button>
          </div>
        </form>  
      </div>
    )
  }
}
