/**
 * FileName index.js
 * Date 2016-08-01
 * Created by jianglinj
 */
'use strict'

import {createStore, compose} from 'redux';
import rootReducers from './../reducers/index';

import { persistState } from 'redux-devtools';
import DevTools from './../tools/DevTools';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

/**
 * reducer (Function): 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
 * [initialState] (any): 初始时的 state。 在同构应用中，你可以决定是否把服务端传来的 state 水合（hydrate）后传给它，或者从之前保存的用户会话中恢复一个传给它。如果你使用 combineReducers 创建 reducer，它必须是一个普通对象，与传入的 keys 保持同样的结构。否则，你可以自由传入任何 reducer 可理解的内容。
 * */
export default initialState => createStore(rootReducers, initialState, enhancer);

