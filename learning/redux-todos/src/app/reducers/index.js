/**
 * FileName index
 * Date 2016-08-01
 * Created by jianglinj
 */
'use strict'

import {combineReducers} from 'redux';
import list from './list';
import filter from './filter';

export default combineReducers({list, filter});
