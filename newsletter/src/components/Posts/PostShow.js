import React, { Component } from 'react';
import logo from '../../assets/images/spinner.png';

class PostIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  
  componentDidMount() {
    var markup = '';
    fetch("https://exercise.10uplabs.com/wp-json/wp/v2/posts")
      .then(response => response.json())
      .then(data => this.setState({
        data
      }));
    }

  render () {
    if (this.state.data) {
      var postIndex = parseInt(this.props.match.params.postId);
      var post = this.state.data.filter(el => el.id === postIndex);
      debugger;
      let html = post[0].content.rendered;
      var markup = {__html: html};
      debugger;
    } 
    return (
      <div>
        <hr/>
         { this.state.data ? <div className="post-show" dangerouslySetInnerHTML={markup}></div> : <img src={logo} className="spinner" alt="loading"></img> }
      </div>
    )
  }
}
export default PostIndex;
