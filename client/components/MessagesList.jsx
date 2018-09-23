import React from 'react';

const MessagesList = (props) => {
  const { messages } = props;
  return (
    <ul>{messages.map(msg => <li key={msg.id}>{msg.text}</li>)}</ul>
  );
};

export default MessagesList;
