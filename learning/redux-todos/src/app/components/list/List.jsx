import React from 'react';
import Todo from './Todo';


export default class List extends React.Component {
  render() {
    let {deleteItem, updateItemStatus, filter} = this.props;
    let filterTodos = this.props.list; 

    if(!filter.active){
      filterTodos = filterTodos.filter(todo => {
        return todo.status === true;
      })
    }

    return (

      <ul className="todo-list">
        {
          filterTodos.map(todo => {
            return <Todo
              key={todo.id}
              deleteItem={() => deleteItem(todo.id)}
              updateItemStatus={(status) => updateItemStatus({id: todo.id, status})}
              {...todo}
            />
          })
        }
      </ul>
    )
  }
}
