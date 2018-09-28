import React from 'react';
import ChannelsList from './components/ChannelsList';
import MessagesList from './components/MessagesList';
import NewMessageForm from './components/NewMessageForm';

const App = () => (
  <div>
    <div className="row">
      <div className="col-2 sidebar">
        <ChannelsList />
      </div>
      <div className="col-10">
        <MessagesList />
        <NewMessageForm />
      </div>
    </div>
  </div>
);

export default App;
