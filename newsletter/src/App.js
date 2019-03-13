import React, { Component } from 'react';
import './App.css';
import PostIndex from './components/PostIndex';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   fetch("https://exercise.10uplabs.com/wp-json/wp/v2/posts")
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       data
  //     }));
  //   }

  render () {
    return (
    <Router>
      <Route exact path="/" component={PostIndex} />
    </Router>
    )
  }
    // <Route path="/about" component={About} />
    // <Route path="/topics" component={Topics} />
  //   let posts;
  //   if (this.state.data) {
  //     posts = this.state.data.map((post, i)=> {
  //       return <PostItem key={post.id} {...post}/> 
  //     })
  //   } else posts = <div>Loading</div>
  //   return (
  //     <div className="container">
  //       <h1 className="blog-title">Eats Diner</h1>
  //       { this.state.data ? posts : <img src={logo} className="spinner" alt="loading"></img> }
  //       <footer className="footer">
  //         <h1 className="call-to-action">Join our newsletter</h1>
  //         <form className="subscribe-form">
  //           <input className="input-field" placeholder="you@example.com"></input>
  //           <input className="subscribe" value="subscribe" type="submit"></input>
  //         </form>
  //         <a className="about-link">Read about our history</a>        
  //       </footer>
  //     </div>
  //   )
  // }
}
export default App;
