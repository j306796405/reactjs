/**
 * FileName routes
 * Date 2016-09-06
 * Created by jianglinj
 */
'use strict'

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Info from './pages/info.jsx';

const routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="info" handler={ Info } />
        <Route name="home" handler={ Home } />
    </Route>
)

export default routes;