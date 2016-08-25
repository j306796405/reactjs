/**
 * FileName App
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'

import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { createHistory, useBasename } from 'history';
import Index from '../components/index.jsx';

export default class View extends Component{
    render () {

        return (
            <Router history={createHistory()}>
                <Route path="/" component={ Index }></Route>
            </Router>
        )
    }
}