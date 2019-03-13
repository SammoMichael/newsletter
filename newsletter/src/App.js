import React, { Component } from 'react';
import {
   PostIndex,
   Header,
   Footer,
   About,
   PostShow,
  } from './components/Index';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
    <div className = "container" >
      <Header /> 
      <Router>
        <>
          <Route path="/about/" component={About} />
          <Route exact path="/" component={PostIndex} />
          <Route exact path={`/post/postId`} component={PostShow} />
        </>
      </Router>
      <Footer />
    </div>
    )
  }
}
export default App;
