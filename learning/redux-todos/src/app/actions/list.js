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

export function updateItemStatus(status){
  return {
    type: types.UPDATE_ITEM_STATUS,
    ...status
  }
}

export function deleteItem(id){
  return {
    type: types.DELETE_ITEM, 
    id
  }
}

export function updateItemsStatus(status){
  return {
    type: types.UPDATE_ITEMS_STATUS,
    ...status
  }
}

//query?
export function deleteItems(query){
  return {
    type: types.DELETE_ITEMS,
    query
  }
}

export function filterItems(active){
  return {
    type: types.FILTER_ITEMS,
    ...active
  }
}
