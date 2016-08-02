import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './../../actions/list';
import AddTodo from './AddTodo';
import List from './List';
import Toggle from './Toggle';
  
class ListBox extends React.Component{
  render(){
    let {addItem, updateItemsStatus} = this.props;

    return (
      <div className="list">
        <header className="list-header">
          <Toggle updateItemsStatus={updateItemsStatus} />
          <AddTodo addItem={addItem} />
        </header>
        <List {...this.props} />
        <footer className="list-footer">
          <a href="javascript:;">

          </a>
        </footer>
      </div>
    )
  }
}

//绑定新的state到props上
let mapStateToProps = state => {
  let list = state.list;
  console.log(state);
  return {
    ...state,
    isAllCompleted: !!list.length && list.every(todo => todo.status)
  }
};

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBox);
