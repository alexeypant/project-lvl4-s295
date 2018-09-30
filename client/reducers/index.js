// import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannel](state, { payload: { newChannel } }) {
    return { ...state, [newChannel.id]: newChannel };
  },
}, 1);

const currentChannelId = handleActions({
  [actions.setCurrentChannel](state, { payload: { id } }) {
    return id;
  },
}, {});

const messages = handleActions({
  [actions.addMessage](state, { payload: { newMessage } }) {
    return [...state, newMessage];
  },
}, {});

const messageSendingState = handleActions({
  [actions.sendMessageRequest]() {
    return 'requested';
  },
  [actions.sendMessageFailure]() {
    return 'failed';
  },
  [actions.sendMessageSuccess]() {
    return 'succeeded';
  },
}, '');


export default combineReducers({
  channels,
  messages,
  form: formReducer,
  messageSendingState,
  currentChannelId,
});
