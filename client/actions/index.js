import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';
import cookies from 'js-cookie';


export const sendMessageRequest = createAction('MESSAGE_SEND_REQUEST');
export const sendMessageSuccess = createAction('MESSAGE_SEND_SUCCESS');
export const sendMessageFailure = createAction('MESSAGE_SEND_FAILURE');

export const sendMessage = (text, user = 'mike') => async (dispatch) => {
  dispatch(sendMessageRequest());
  const data = {
    data: {
      attributes: {
        text,
        user,
      },
    },
  };
  const url = '/api/v1/channels/0/messages';

  try {
    const response = await axios.post(url, data);
    const { data: { attributes: message } } = response.data;
    dispatch(sendMessageSuccess({ message }));
  } catch (e) {
    dispatch(sendMessageFailure());
  }
};


export const addChannel = createAction('CHANNEL_ADD');
export const addMessage = createAction('MESSAGE_ADD');

export const removeTask = id => ({
  type: 'TASK_REMOVE',
  payload: {
    id,
  },
});
