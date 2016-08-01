/**
 * FileName list
 * Date 2016-08-01
 * Created by jianglinj
 */
'use strict'
import * as types from './../constants/ActionTypes';

export function addItem(text){
  return {
    type: types.ADD_ITEM,
    text
  }
}

export function updateItem(data){
  return {
    type: types.UPDATE_ITEM,
    data
  }
}

export function deleteItem(id){
  return {
    type: types.DELETE_ITEM,
    id
  }
}

export function updateItems(data){
  return {
    type: types.UPDATE_ITEMS,
    data
  }
}

//query?
export function deleteItems(query){
  return {
    type: types.DELETE_ITEMS,
    query
  }
}

//status?
export function filterItems(status){
  return {
    type: types.FILTER_ITEMS,
    status
  }
}
