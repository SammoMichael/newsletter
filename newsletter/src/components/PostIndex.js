import React, { Component } from 'react';
import logo from '../assets/images/spinner.png';
import '../App.css';
import PostItem from './PostItem';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class PostIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for subscribing with human@website.com')
  }
  componentDidMount() {
    fetch("https://exercise.10uplabs.com/wp-json/wp/v2/posts")
      .then(response => response.json())
      .then(data => this.setState({
        data
      }));
    }

  render () {
    let posts;
    if (this.state.data) {
      posts = this.state.data.map((post, i)=> {
        return <PostItem key={post.id} {...post}/> 
      })
    } else posts = <div>Loading</div>
    return (
      <div className="container">
        <h1 className="blog-title">Eats Diner</h1>
        { this.state.data ? posts : <img src={logo} className="spinner" alt="loading"></img> }
        <footer className="footer">
          <h1 className="call-to-action">Join our newsletter</h1>
          <form action="post" className="subscribe-form">
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
export default PostIndex;
