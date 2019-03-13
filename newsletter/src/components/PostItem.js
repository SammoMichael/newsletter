import React, { Component } from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router-dom';
import '../App.css';

export class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = { hidden: true, tilted: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.setState({
         hidden: !(this.state.hidden),
        tilted: !(this.state.tilted)    
      })
    }

    render() {
      console.log(this.props);
      console.log(this.props.date)
      let date = new Date(this.props.date)
      date = date.toDateString();
      date = date.slice(3)
      window.object = this.props
      window.props = jQuery.parseHTML(this.props.excerpt.rendered) 
      let replaced = jQuery.parseHTML(this.props.excerpt.rendered)
      replaced = replaced[0].innerText
      window.replaced = replaced;
      var encodedStr = replaced;
      var parser = new DOMParser();
      var dom = parser.parseFromString(
        '<!doctype html><body>' + encodedStr,
        'text/html');
      var decodedString = dom.body.textContent;

      console.log(decodedString);
      var decoded = decodedString.replace('&#038', '&amp;', '');
      replaced = decoded.slice(0, -3);
    return (
      < div className = "post">
        < li className = "title" > 
          {this.state.tilted ?
           <i onClick={this.handleClick} className = "fas fa-play inactive" /> :
          <i onClick={this.handleClick} className = "fas fa-play fa-rotate-90"/> }
          
          {this.props.title.rendered}
        </li >
        {this.state.hidden ?
        null : (
          <><li>{date}</li><li>{replaced}</li><Link to=""></Link></>
        )}
        <hr />
      </div>
    )
  }
}

export default PostItem
