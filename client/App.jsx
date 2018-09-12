import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import React from 'react';
import { render } from 'react-dom';
import ChannelsList from './components/ChannelsList';
import NewMessageForm from './components/NewMessageForm';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

const App = (channels) => {
  const mountNode = document.getElementById('chat');
  const vdom = (
    <div>
      <ChannelsList channels={channels} />
      <NewMessageForm />
    </div>
  );

  render(vdom, mountNode);
};

export default App;
