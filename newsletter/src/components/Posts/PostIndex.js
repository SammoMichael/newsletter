import React, { Component } from 'react';
import logo from '../../assets/images/spinner.png';
import PostItem from './PostItem';
import '../../assets/stylesheets/App.css';
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
      submission: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submission: true });
    alert('Thank you for subscribing with human@website.com');
    this.setTimeout(() => {this.setState({ submission: false })}, 3000);
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
      <>
        { this.state.submission ? < span > Thank you
          for subscribing with human @website.com </span> : <span></span> }
        { this.state.data ? posts : <img src={logo} className="spinner" alt="loading"></img> }
      </>
    )
  }
}
export default PostIndex;
