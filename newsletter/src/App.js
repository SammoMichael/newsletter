import React, { Component } from 'react';
import {
   PostIndex,
   Header,
   Footer,
   About,
   PostShow,
  } from './components/Index';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
    <div className="container">
      <Header /> 
        <Switch>
          <Route path="/about" component={About}/>
          <Route exact path="/" component={PostIndex}/>
          <Route path={`/posts/:postId`} component={PostShow}/>
        </Switch>
      <Footer />
    </div>
    )
  }
}
export default App;
