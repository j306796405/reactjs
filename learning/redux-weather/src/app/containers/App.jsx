import React from 'react';
import {Router, Route, Link} from 'react-router';
import {createHistory, useBasename} from 'history';
import Path from './../routes/Index'

export default class App extends React.Component {
  render() {
    return (
      <Path /> 
    )
  }
}
