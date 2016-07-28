/**
 * FileName index.js
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

export default class Category extends Component {
    render () {
        return (
            <div className="category">
                <li className="active">Default</li>
            </div>
        );
    }
}