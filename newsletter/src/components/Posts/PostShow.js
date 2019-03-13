import React, { Component } from 'react';
import logo from '../../assets/images/spinner.png';

class PostIndex extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      data: null,
    };
  }
  
  componentDidMount() {
      console.log('show mounted')
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
        return <span>Hello World</span> 
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
