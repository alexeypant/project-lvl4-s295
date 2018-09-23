import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannel](state, { payload: { newChannel } }) {
    return { ...state, [newChannel.id]: newChannel };
  },
  // [actions.removeTask](state, { payload: { id } }) {
  //   return _.omit(state, id);
  // },
  // [actions.toggleTaskState](state, { payload: { id } }) {
  //   const task = state[id];
  //   const newState = task.state === 'active' ? 'finished' : 'active';
  //   const updatedTask = { ...task, state: newState };
  //   return { ...state, [task.id]: updatedTask };
  // },
}, {});

const messages = handleActions({
  [actions.addMessage](state, { payload: { newMessage } }) {
    return [...state, newMessage];
  },
  // [actions.removeTask](state, { payload: { id } }) {
  //   return _.omit(state, id);
  // },
  // [actions.toggleTaskState](state, { payload: { id } }) {
  //   const task = state[id];
  //   const newState = task.state === 'active' ? 'finished' : 'active';
  //   const updatedTask = { ...task, state: newState };
  //   return { ...state, [task.id]: updatedTask };
  // },
}, {});


export default combineReducers({
  channels,
  messages,
});
