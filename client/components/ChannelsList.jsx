import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { channelsSelector } from '../selectors';

const mapStateToProps = (state) => {
  const props = {
    channels: channelsSelector(state),
  };
  return props;
};

@connect(mapStateToProps, actionCreators)
export default class ChannelsList extends React.Component {
  render() {
    const { channels } = this.props;
    return (
      <div>{channels.map(ch => <div className="btn btn-block btn-secondary btn-light" key={ch.id}>{ch.name}</div>)}</div>
    );
  }
}
