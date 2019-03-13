import React, { Component } from 'react';
import logo from './spinner.png';
import './App.css';
import PostItem from './PostItem';

class App extends Component {
  // const postsAPI = ;
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
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
        { this.state.data ? posts : <div className="spinner">Loading</div> }
        <footer className="footer">
          <h1 className="call-to-action">Join our newsletter</h1>
          <form className="subscribe-form">
            <input className="input-field" placeholder="you@example.com"></input>
            <input className="subscribe" value="subscribe" type="submit"></input>
          </form>
          <a className="about-link" href="">Read about our history</a>        
        </footer>
      </div>
    )
  }
}

export default App;
