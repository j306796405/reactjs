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

export default (state = [], action) => {
    switch(action.type){
        case ADD_ITEM:
            return [createItem(action.text), ...state]

        default:
            return state;
    }


}