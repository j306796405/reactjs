/**
 * FileName routes
 * Date 2016-08-11
 * Created by jianglinj
 */
'use strict'

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history';
import App from './../containers/App';
import Index from './../component/Index';
import Search from './../component/Search';

export default class Path extends React.Component {
  render() {
    return (
      <Router history={createHistory()}>
        <Route path="/" component={ Index }></Route>
        <Route path="/search" component={ Search }></Route>
      </Router>
    )
  }
}

