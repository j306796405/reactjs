import React from 'react';
import Todo from './Todo';


export default class List extends React.Component {
  render() {
    let {deleteItem, updateItemStatus} = this.props;

    return (
      <ul className="todo-list">
        { 
          this.props.list.map(todo => {
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
