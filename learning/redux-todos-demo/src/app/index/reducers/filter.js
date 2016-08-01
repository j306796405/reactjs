/**
 * FileName filter
 * Date 2016-07-29
 * Created by jianglinj
 */
'use strict'

import { FILTER_ITEMS } from '../constants/ItemTypes';

export default (state = {active: true}, action) => {
    switch (action.type) {
        case FILTER_ITEMS:
            return Object.assign({}, state, {active: action.active})

        default:
            return state
    }
}