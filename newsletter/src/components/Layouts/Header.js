import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <>
        <Link className="home-link" to="/"><h1 className = "blog-title" > Eats Diner </h1></Link>
      </>
    )
  }
}

export default Header
