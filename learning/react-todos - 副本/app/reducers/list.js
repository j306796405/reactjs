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

export default (state = [], action) => {
  switch (action.type){
    case types.ADD_ITEM:
      //...state写在前面后面有区别吗
      return [...state, addItem(action.text)];

    default:
      return state
  }
}
