/**
 * FileName TodoItem
 * Date 2016-07-20
 * Created by jianglinj
 */
'use strict'
import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoItem extends React.Component{
  handlerChange(){
    let isDone = !this.props.isDone;
    this.props.changeTodoState(this.props.index, isDone);
  }

  handlerDelete(){
    this.props.deleteTodo(this.props.index);
  }

  handlerMouseOver(){
    ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = 'inline';
  }

  handlerMouseOut(){
    ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = 'none';
  }

  render(){
    return (
      <li
        onMouseOver={this.handlerMouseOver.bind(this)}
        onMouseOut={this.handlerMouseOut.bind(this)}
      >
        <input type="checkbox" checked={this.props.isDone}
          onChange={this.handlerChange.bind(this)}
        />
        <span>{this.props.text}</span>
        <button className="fr" style={{display: 'none'}}
                ref="deleteBtn"
                onClick={this.handlerDelete.bind(this)}
        >删除</button>
      </li>
    )
  }
}
