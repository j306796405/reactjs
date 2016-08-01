/**
 * FileName list
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'

import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, UPDATE_ITEMS, DELETE_ITEMS, FILTER_ITEMS } from './../constants/ItemTypes';

let createItem = text => {
    let time = Date.now();

    return {
        id: Math.random().toString(36).split('.').join(''),
        addTime: time,
        updateTime: time,
        status: false,
        text
    }
}

/**
 * 更新
 *
 * @param {String} 添加的文字
 *
 * @return {Array} 更新后的数据
 */
let updateItem = ({id, ...other}, state) => {
    let time = Date.now();

    return state.map(item =>
        item.id === id ?
            Object.assign({}, item, other, {
                updateTime: time
            }) :
            item
    );
}

let deleteItem = (id, state) => {
    return state.filter(item => {
        return item.id !== id;
    })
}

//貌似每个reducer都有自己的state
export default (state = [], action) => {
    switch(action.type){
        case ADD_ITEM:
            return [createItem(action.text), ...state];

        case UPDATE_ITEM:
            return updateItem(action.data, state);

        case DELETE_ITEM:
            return deleteItem(action.id, state);

        case UPDATE_ITEMS:
            return state.map(item => Object.assign({}, item, action.data))

        case DELETE_ITEMS:
            return []

        default:
            return state;
    }


}