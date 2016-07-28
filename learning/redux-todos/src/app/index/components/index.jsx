/**
 * FileName index.jsx
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'
import React, { Component } from 'react';
import Category from './category/index.jsx';
import ListBox from './list/index.jsx';

export default class Index extends Component {
    render () {
        return (
            <div>
                <h1>Todo-List</h1>
                <div className="box clearfix">
                    <Category />
                    <ListBox />
                </div>
            </div>
        );
    }
}