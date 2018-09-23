import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';
import cookies from 'js-cookie';

const user = cookies.get('userName');

export const sendMessageRequest = createAction('MESSAGE_SEND_REQUEST');
export const sendMessageSuccess = createAction('MESSAGE_SEND_SUCCESS');
export const sendMessageFailure = createAction('MESSAGE_SEND_FAILURE');

export const sendMessage = message => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    const response = await axios.post(routes.messageUrl(), { message });
    dispatch(sendMessageSuccess());
  } catch (e) {
    dispatch(sendMessageFailure());
  }
//   type: 'MESSAGE_ADD',
//   payload: {
//     message,
//     user,
//   },
};

export const addChannel = createAction('CHANNEL_ADD');
export const addMessage = createAction('MESSAGE_ADD');

export const removeTask = id => ({
  type: 'TASK_REMOVE',
  payload: {
    id,
  },
});
