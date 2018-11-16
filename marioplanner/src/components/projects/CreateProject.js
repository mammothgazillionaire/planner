import React, { Component } from 'react'

export default class SignUp extends Component {

  state = {
    title: "",
    content: ""
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
          <h5 className="grey-text">Create post</h5>
          <div className="input-field">
            <label htmlFor="title"></label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
           <div className="input-field">
            <label htmlFor="content"></label>
            <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create </button>
          </div>
        </form>  
      </div>
    )
  }
}