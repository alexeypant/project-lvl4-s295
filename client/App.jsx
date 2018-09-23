import React from 'react';
// import ChannelsList from './components/ChannelsList';
import MessagesList from './containers/MessagesList';
import NewMessageForm from './containers/NewMessageForm';


const App = () => (
  <div>
    {/* <ChannelsList /> */}
    <MessagesList />
    <NewMessageForm />
  </div>
);

export default App;
