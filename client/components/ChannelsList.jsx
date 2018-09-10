import React from 'react';

const ChannelsList = (props) => {
  const { channels } = props;
  return (
    <ul>{channels.map(ch => <li key={ch.id}>{ch.name}</li>)}</ul>
  );
};

export default ChannelsList;
