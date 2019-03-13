import React, { Component } from 'react'
import jQuery from 'jquery'

export class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = { hidden: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      this.setState({ hidden: !(this.state.hidden) })
    }

    render() {
      console.log(this.props);
      console.log(this.props.date)
      let date = new Date(this.props.date)
      date = date.toDateString();
      date = date.slice(3)
      // date = date.to_string();
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
      // replaced = replaced.replace('&amp;', '')
      // replaced = replaced.split('#038;').join(' ')
      // let replaced = this.props.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "");
      // replaced = replaced.split('&nbsp;').join(' ')
      // replaced = replaced.split('&#038;').join(' ')
      var decoded = decodedString.replace('&#038', '&amp;', '');
      replaced = decoded.slice(0, -3);
      // window.replaced = replaced;
      // window.excerpt = this.props.excerpt
    return (
      < div className = "post">
        {/* <li>this.props.id</li> */}
        < li className = "title" > <i onClick={this.handleClick} className = "fas fa-play" > </i>{this.props.title.rendered}</li >
        <li>{date}</li>
        {this.state.hidden ? null : <li>{replaced}</li>}
        <hr />
      </div>
    )
  }
}

export default PostItem
