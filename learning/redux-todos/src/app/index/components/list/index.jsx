/**
 * FileName index.jsx
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/list.js';
import AddTodo from './AddTodo.jsx';
import List from './List.jsx';
import Toggle from './Toggle.jsx';

export default class ListBox extends Component {
    toggleComplated() {
        let {filter, activeFilter} = this.props;

        activeFilter(!filter.active);
    }

    render() {
        let {filter, addItem, updateItems, isAllCompleted} = this.props;

        return (
            <div className="list">
                <header className="list-header">
                    <Toggle updateItems={ updateItems } isAllCompleted={isAllCompleted} />
                    <AddTodo addItem={addItem}/>
                </header>
                <List {...this.props} />
                <footer className="list-footer">
                    <a href="javascript:;"
                       onClick={this.toggleComplated.bind(this)}>
                        {filter.active ? 'Show Completed' : 'Hide Completed'}
                    </a>
                </footer>
            </div>
        );
    }
}

//绑定新的state到props上
let mapStateToProps = state => {
    let list = state.list;

    return {
        isAllCompleted: !!list.length && list.every(item => item.status),
        ...state
    }
};
//绑定所有actions的方法名到props上
let mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBox);