/**
 * FileName index
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'

import { combineReducers } from 'redux';
import list from './list';
import filter from './filter';

/**
 * 对外公开reducer对象
 * {
 *      list: list
 * }
*/
export default combineReducers({ list, filter })