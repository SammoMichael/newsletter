import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PostItem extends Component {
    constructor(props) {
      super(props);
      this.state = { hidden: true, tilted: true };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        hidden: !(this.state.hidden), // toggle internal state of accordion and rotating icons
        tilted: !(this.state.tilted)    
      })
    }

    render() {
      let date = new Date(this.props.date);
      date = date.toDateString();
      date = date.slice(3);
      window.object = this.props;
      if (this.props) {
        let html = this.props.excerpt.rendered;
        var markup = {__html: html}
      }
      
    return (
      < div className = "post">
        < li className = "title" onClick={this.handleClick}> 
          {this.state.tilted ?
           <i onClick={this.handleClick} className = "fas fa-play inactive" /> :  // ternary for icon animation
          <i onClick={this.handleClick} className = "fas fa-play active"/> }
          {this.props.title.rendered}
        </li >
        {this.state.hidden ? // ternary for dynamic accordion action of excerpts
        null : (
          <div className="post-body"><li className="date">{date}</li><div dangerouslySetInnerHTML={markup} className="excerpt"/><Link 
            className="post-links" 
            to={`/posts/${this.props.id}`} 
            key={this.props.id} >Read more</Link>
          </div>
          )}
        <hr />
      </div>
    )
  }
}

export default PostItem
