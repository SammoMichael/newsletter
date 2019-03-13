import React, { Component } from 'react';
import logo from '../../assets/images/spinner.png';
import PostItem from './PostItem';
import '../../assets/stylesheets/App.css';

class PostIndex extends Component {
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
        if (i < 5 && !post.title.rendered.includes('Private:')){
          return <PostItem key={post.id} {...post}/> 
        }
      })
    } else posts = <div>Loading</div>
    return (
      <>
        <hr/>
        { this.state.data ? posts : <img src={logo} className="spinner" alt="loading"></img> }
      </>
    )
  }
}
export default PostIndex;
