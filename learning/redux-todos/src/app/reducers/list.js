/**
 * FileName list
 * Date 2016-08-01
 * Created by jianglinj
 */
'use strict'

import * as types from './../constants/ActionTypes';

let addItem = text => {
  let time = Date.now();

  return {
    id: Math.random().toString(36).split('.').join(''),
    addTime: time,
    updateTime: time,
    text,
    status: false
  }
}

let deleteItem = (state, id) => {
  return state.filter(todo => {
    return todo.id !== id;
  })
}

let updateItemStatus = (state, action) => {
  return state.map(todo => {
    if(todo.id === action.id){
      todo.status = action.status;
    }
    return todo;
  })
}

let updateItemsStatus = (state, ation) => {
  return state.map(todo => {
    todo.status = ation.status;
    return todo;
  })
}

export default (state = [], action) => {
  switch (action.type){
    case types.ADD_ITEM:
      return [...state, addItem(action.text)];

    case types.DELETE_ITEM:
      return deleteItem(state, action.id);

    case types.UPDATE_ITEM_STATUS:
      return updateItemStatus(state, action);

    case types.UPDATE_ITEMS_STATUS:
      return updateItemsStatus(state, action);

    default:
      return state
  }
}
