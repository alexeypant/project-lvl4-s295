import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import faker from 'faker';
import cookies from 'js-cookie';
import io from 'socket.io-client';
import gon from 'gon';
import App from '../client/App';
import reducers from '../client/reducers';
import * as actions from '../client/actions';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const store = createStore(
  reducers,
  gon,
  compose(
    // applyMiddleware(thunk),
    devtoolMiddleware,
  ),
);

// store.dispatch(fetchTasks());

const { channels, messages } = gon;

const userName = faker.fake('{{name.firstName}} {{name.lastName}}');
cookies.set('userName', userName);
const socket = io();
socket.on('newChannel', (data) => {
  const newChannel = data.data.attributes;
  store.dispatch(actions.addChannel({ newChannel }));
  // console.log(newChannel);
});

socket.on('newMessage', (data) => {
  console.log(data);
  const newMessage = data.data.attributes;
  store.dispatch(actions.addMessage({ newMessage }));
});

const mountNode = document.getElementById('chat');

ReactDOM.render(
  <App channels={channels} messages={messages} />,
  mountNode,
);


// App(channels, messages);
