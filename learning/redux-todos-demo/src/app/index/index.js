/**
 * FileName index.js
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './container/Root';
import createStore from './store';

let store = createStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('app')
)
