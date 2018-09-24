import React from 'react';
import ChannelsList from './containers/ChannelsList';
import MessagesList from './containers/MessagesList';
import NewMessageForm from './containers/NewMessageForm';


const App = () => (
  <div className="app">
    <div className="sideBar">
      <ChannelsList />
    </div>
    <div className="centralPanel">
      <MessagesList />
      <NewMessageForm />
    </div>
  </div>
);

export default App;
