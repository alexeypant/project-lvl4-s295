import React from 'react';

const MessagesList = (props) => {
  const { messages } = props;
  return (
    <div className="messagesList">
      {messages.map(msg => <div key={msg.id}><b>{msg.userName}</b>: {msg.text}</div>)
      }
    </div>
  );
};

export default MessagesList;
