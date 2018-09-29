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
  componentDidMount() {
    this.scrollToTheBottom();
  }

  componentDidUpdate() {
    this.scrollToTheBottom();
  }

  scrollToTheBottom() {
    this.elm.scrollTop = this.elm.scrollHeight;
  }

  renderMessagesList = messages => messages.map(msg => (
    <div key={msg.id}>
      <b>{msg.userName}</b>
    :
      {msg.text}
    </div>));

  render() {
    const { messages } = this.props;
    return (
      <div
        style={{ height: '70vh', width: '80%', overflow: 'scroll' }}
        ref={(elm) => { this.elm = elm; }} // eslint-disable-line
      >
        <div className="d-flex flex-column mb-3 h-100 justify-content-start">
          {this.renderMessagesList(messages)}
        </div>
      </div>
    );
  }
}
