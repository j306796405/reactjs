import React from 'react';
import {Router, Route, Link} from 'react-router';
import { createHistory, useBasename } from 'history';
import Index from './../components/index.jsx'; 

export default class View extends React.Component{
  render(){
    return (
      <Router history={createHistory()}>
        <Route path="/" component={ Index }/>
      </Router>
    )
  }
}
