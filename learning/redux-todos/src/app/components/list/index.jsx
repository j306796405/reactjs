import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './../../actions/list';
import AddTodo from './AddTodo';
import List from './List';
import Toggle from './Toggle';

class ListBox extends React.Component{
  changeActive(){
    let {filter, filterItems} = this.props;
    filterItems({active: !filter.active});
  }
 
  render(){
    let {addItem, updateItemsStatus, filter} = this.props;

    return (
      <div className="list">
        <header className="list-header">
          <Toggle updateItemsStatus={updateItemsStatus} />
          <AddTodo addItem={addItem} />
        </header>
        <List {...this.props} />
        <footer className="list-footer">
          <a href="javascript:;" onClick={this.changeActive.bind(this)}>
            {!filter.active ? 'Show All' : 'Show Completed'}
          </a>
        </footer>
      </div>
    )
  }
}

//绑定新的state到props上
let mapStateToProps = state => {
  let list = state.list;
  return {
    ...state,
    isAllCompleted: !!list.length && list.every(todo => todo.status)
  }
};

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBox);
