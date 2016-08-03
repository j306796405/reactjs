import React from 'react';

export default class AddTodo extends React.Component{
  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e){
    if(e.keyCode === 13){
      let value = e.target.value;
      this.props.addItem(value);
      e.target.value = '';
    }
  }

  render(){
    return <input id="new-todo" placeholder="What needs to be done?" onKeyUp={this.addTodo} />
  }
}
