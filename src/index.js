import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About';
import { Switch } from 'react-router-dom';
import Shop from './Shop';
import Photo from "./photo"

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/Art" component={App}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Shop" component={Shop}></Route>
      <Route path="/" component={App}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);


