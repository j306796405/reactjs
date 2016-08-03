/**
 * FileName filter
 * Date 2016-08-03
 * Created by jianglinj
 */
'use strict'

import * as types from './../constants/ActionTypes';

export default (state = {active: true}, action) => {
  switch(action.type){
    case types.FILTER_ITEMS:
      return Object.assign({}, state, {active: action.active});

    default:
      return state;
  }

}
