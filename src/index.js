import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import React from 'react';
import { render } from 'react-dom';
import gon from 'gon';
import ChannelsList from '../client/components/ChannelsList';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const mountNode = document.getElementById('chat');

const { channels } = gon;

render(<ChannelsList channels={channels} />, mountNode);
