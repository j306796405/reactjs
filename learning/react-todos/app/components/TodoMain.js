import React from 'react';
import TodoItem from './TodoItem';

export default class TodoMain extends React.Component{
  render(){
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, index) => {
            return <TodoItem
                      key={index}
                      index={index}
                      {...todo}
                      {...this.props}
                    />
          }
        )}
      </ul>
    )
  }
}
