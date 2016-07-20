/**
 * FileName TodoHeader
 * Date 2016-07-20
 * Created by jianglinj
 */
'user strict'
import React from 'react';

class TodoHeader extends React.Component {

  handlerKeyUp(event){
    if(event.keyCode === 13){
      let value = event.target.value;

      if(!value){
        return false;
      }

      let newTodoItem = {
        text: value,
        isDone: false
      }
      event.target.value = '';
      this.props.addTodo(newTodoItem);
    }
  }

  render() {
    return (
      <div className="panel-header">
        <input type="text" onKeyUp={this.handlerKeyUp.bind(this)} placeholder="what's your task ？"/>
      </div>
    )
  }
}

export default TodoHeader;
