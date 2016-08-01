/**
 * FileName index
 * Date 2016-07-28
 * Created by jianglinj
 */
'use strict'

import { createStore } from 'redux';
import rootReducers from './../reducers';

export default initialState => createStore(rootReducers, initialState);
