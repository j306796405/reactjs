import React, { Component } from 'react';

export default class Item extends Component {
    toggleTodo(e) {
        this.props.updateItem({
            status: e.currentTarget.checked
        })
    }

    render () {
        let { deleteItem, status } = this.props;

        return (
            <li className={status ? 'completed' : '' }>
                <input className="toggle" type="checkbox" checked={ status }
                       onChange={ this.toggleTodo.bind(this) }/>
                <label>{this.props.text}</label>
                <button className="destroy" onClick={ deleteItem }></button>
            </li>
        )
    }
}