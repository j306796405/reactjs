/**
 * FileName index.jsx
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/list.js';
import AddTodo from './AddTodo.jsx';

export default class ListBox extends Component {
    render(){
        let { filter, addItem, updateItems, isAllCompleted } = this.props;

        return (
            <div className="list">
                <header className="list-header">
                    <AddTodo addItem={addItem} />
                </header>
            </div>
        );
    }
}

let mapStateToProps = state => {
    let list = state.list;

    return {
        isAllCompleted: !!list.length && list.every(item => item.status),
        ...state
    }
};
let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListBox);