import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import React from 'react';
import { render } from 'react-dom';
// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import ChannelsList from './components/ChannelsList';
import MessagesList from './components/MessagesList';
import NewMessageForm from './components/NewMessageForm';


export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    const { channels, messages } = this.props;
    return (
      <div>
        <ChannelsList channels={channels} />
        <MessagesList messages={messages} />
        <NewMessageForm />
      </div>);
  }
}


// const App = (channels, messages) => {
//   const mountNode = document.getElementById('chat');
//   const vdom = (
//     <div>
//       <ChannelsList channels={channels} />
//       <MessagesList messages={messages} />
//       <NewMessageForm />
//     </div>
//   );

//   render(vdom, mountNode);
// };

// export default App;
