import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <h1 className="call-to-action">Join our newsletter</h1>
          <form className="subscribe-form">
            <label htmlFor="email"></label>
            <input type="email" id="email" className="input-field" placeholder="you@example.com"></input>
            <input onClick={this.handleSubmit} className="subscribe" value="subscribe" type="submit"></input>
          </form>
          <Link to="/about" className="about-link">Read about our history</Link>        
        </footer>
      </div>
    )
  }
}

export default Footer
