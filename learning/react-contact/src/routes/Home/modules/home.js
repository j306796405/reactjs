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

export function receiveTasks (tasks) {
  return {
    type: RECEIVE_TASKS,
    payload: {
      ...tasks
    }
  }
}

export function fetchTasks(){
  return (dispatch, getState) => {
    if (getState().zen.fetching) return

    dispatch(requestZen())
    return fetch('http://localhost:8000/tasks')
      .then(data => data.text())
      .then(text => dispatch(receiveZen(text)))
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
    return ({...state, fetching: false, tasks: action.tasks})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  tasks: []
}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
