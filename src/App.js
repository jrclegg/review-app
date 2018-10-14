import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/home" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
