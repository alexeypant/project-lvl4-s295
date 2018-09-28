import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { messagesSelector } from '../selectors';

const mapStateToProps = (state) => {
  const props = {
    messages: messagesSelector(state),
  };
  return props;
};

@connect(mapStateToProps, actionCreators)
export default class MessagesList extends React.Component {
  renderMessagesList = messages => messages.map(msg => (
    <div key={msg.id}>
      <b>{msg.userName}</b>
    :
      {msg.text}
    </div>));

  render() {
    const { messages } = this.props;
    return (
      <div style={{ height: '70vh', width: '80%', overflow: 'auto' }}>
        <div className="d-flex flex-column mb-3 h-100 justify-content-end">
          {this.renderMessagesList(messages)}
        </div>
      </div>
    );
  }
}
