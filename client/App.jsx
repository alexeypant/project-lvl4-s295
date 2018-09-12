import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import React from 'react';
import { render } from 'react-dom';
import ChannelsList from './components/ChannelsList';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';


const App = (channels) => {
  const mountNode = document.getElementById('chat');
  render(<ChannelsList channels={channels} />, mountNode);
};

export default App;
