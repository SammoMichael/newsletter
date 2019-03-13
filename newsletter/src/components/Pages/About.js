import React, { Component } from 'react'
import logo from '../../assets/images/spinner.png';
export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
 
  componentDidMount() {
    fetch("https://exercise.10uplabs.com/wp-json/wp/v2/pages")
      .then(response => response.json())
      .then(data => this.setState({
        data
      }));
  }
  render() {
    if (this.state.data) {
      let html = this.state.data[0].content.rendered
      var markup = {__html: html}
    }
    return (
      <div>
        <h1 className='about-header'> The history of Eats Diner</h1>
       { this.state.data ? <div className="about-page" dangerouslySetInnerHTML={markup}></div> : <img src={logo} className="spinner" alt="loading"></img> }
      </div>
    )
  }
}

export default About
