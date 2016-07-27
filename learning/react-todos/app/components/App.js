import React from 'react';
import ReactDOM from 'react-dom';
import LocalDb from "localDb";
import TodoHeader from './TodoHeader.js';
import TodoMain from './TodoMain.js';
import TodoFooter from './TodoFooter.js';

import './../css/main.scss';

class App extends React.Component {
  constructor(){
    super();
    this.db = new LocalDb('React-Todos');
    this.state = {
      todos: this.db.get('todos') || [],
      isAllChecked: false
    }
  }

  allChecked(){
    var isAllChecked = false;
    if(this.state.todos.every(todo => {
        return todo.isDone;
      })){
      isAllChecked = true;
    }
    this.setState({
      todos: this.state.todos,
      isAllChecked
    })
  }

  addTodo(todoItem){
    this.state.todos.push(todoItem);
    this.db.set('todos', this.state.todos);
    this.allChecked();
  }

  deleteTodo(index){
    this.state.todos.splice(index, 1);
    this.setState({todos: this.state.todos});
    this.db.set('todos', this.state.todos);
  }

  changeTodoState(index, isDone, isChangeAll=false){
    if(isChangeAll){
      this.setState({
        todos: this.state.todos.map(todo => {
          todo.isDone = isDone;
          return todo;
        }),
        isAllChecked: isDone
      })
    }else{
      this.state.todos[index].isDone = isDone;
      this.allChecked();
    }
    this.db.set('todos', this.state.todos);
  }

  clearDone(){
    let todos = this.state.todos.filter(todo => !todo.isDone);
    this.setState({
      todos: todos,
      isAllChecked: false
    })
    this.db.set('todos', todos);
  }


  render(){
    var props = {
      todoCount: this.state.todos.length || 0,
      todoDoneCount: (this.state.todos && this.state.todos.filter(todo => {
        return todo.isDone;
      })).length || 0
    }
    return (
      <div className="panel">
        <TodoHeader addTodo={this.addTodo.bind(this)} />
        <TodoMain
          todos={this.state.todos}
          deleteTodo={this.deleteTodo.bind(this)}
          changeTodoState={this.changeTodoState.bind(this)}
        />
        <TodoFooter
          {...props}
          isAllChecked={this.state.isAllChecked}
          changeTodoState={this.changeTodoState.bind(this)}
          clearDone={this.clearDone.bind(this)}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
