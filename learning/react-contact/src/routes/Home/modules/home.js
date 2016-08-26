/**
 * FileName tasks
 * Date 2016-08-25
 * Created by jianglinj
 */
'use strict'

// ------------------------------------
// Constants
// ------------------------------------
const REQUEST_TASKS = 'REQUEST_TASKS';
const RECEIVE_TASKS = 'RECEIVE_TASKS';

// ------------------------------------
// Actions
// ------------------------------------
export function requestTasks () {
  return {
    type: REQUEST_TASKS
  }
}

export function receiveTasks (datas) {
  return {
    type: RECEIVE_TASKS,
    payload: {
      datas
    }
  }
}

export function fetchTasks(){
  return (dispatch, getState) => {
    if (getState().tasks.fetching) return

    dispatch(requestTasks())
    return fetch('http://localhost:8000/tasks')
      .then(data => {
        return data.json();
      })
      .then(text => {
        dispatch(receiveTasks(text))
      })
  }
}

export const actions = {
  requestTasks,
  receiveTasks,
  fetchTasks
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_TASKS]: (state) => {
    return ({...state, fetching: true})
  },
  [RECEIVE_TASKS]: (state, action) => {
    return ({...state, fetching: false, ...action.payload})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  datas: []
}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
