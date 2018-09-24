import React from 'react';

const ChannelsList = (props) => {
  const { channels } = props;
  return (
    <div className="channelsList">{channels.map(ch => <div className="btn btn-secondary btn-light" key={ch.id}>{ch.name}</div>)}</div>
  );
};

export default ChannelsList;
