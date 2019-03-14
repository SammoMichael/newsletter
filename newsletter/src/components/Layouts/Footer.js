import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', submission: false }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.value !== '') {
      this.setState({ submission: true });
      setTimeout(() => { this.setState({submission: false})}, 3000);
    }
  }
  render() {
    return (
      <>
        {
          this.state.submission ?
           < div className = "submit-alert" ><div className = "submit-site" > Thank you
          for subscribing with < a className = 'submit-link' href = {this.state.value} >{this.state.value}</a>!</div ></div>: '' }
        <footer className="footer">
          <h1 className="call-to-action">Join our newsletter</h1>
          <form className="subscribe-form">
            <label htmlFor="email"></label>
            <div className="subcribe-call"><input type="email" className="input-field" onChange={this.handleChange} value={this.state.value} placeholder="    you@example.com"></input>
            <input onClick={this.handleSubmit} className="subscribe" value="Subscribe" type="submit"></input></div>
          </form>
          <br/>
          <Link to="/about" className="about-link">Read about our history</Link>        
        </footer>
      </>
    )
  }
}

export default Footer
