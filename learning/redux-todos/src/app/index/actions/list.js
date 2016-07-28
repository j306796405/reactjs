/**
 * FileName list
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'

import * as types from './../constants/ItemTypes';

export function addItem(text){
    return {
        type: types.ADD_ITEM,
        text
    }
}