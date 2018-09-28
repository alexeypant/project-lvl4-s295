import React from 'react';
import { connect } from 'react-redux';
import cookies from 'js-cookie';
import { Field, reduxForm } from 'redux-form';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    currentChannelId: state.currentChannelId,
    messageSendingState: state.messageSendingState,
  };
  return props;
};

@connect(mapStateToProps, actionCreators)
@reduxForm({ form: 'newMessage' })
export default class NewMessageForm extends React.Component {
  onSubmit = (values) => {
    const { sendMessage, reset } = this.props;
    sendMessage(values.text);
    reset();
  }

  render() {
    const { handleSubmit, messageSendingState } = this.props;
    const isDisabled = messageSendingState === 'requested';
    const isFailed = messageSendingState === 'failed';
    const userName = cookies.get('userName');
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className="row">
          <div className="col-2 input-group-text">{userName}</div>
          <Field className="col-6" name="text" required component="input" type="text" />
          <button className="col-2 btn btn-primary" type="submit" disabled={isDisabled}>Send</button>
        </div>
        { isFailed && <div className="text-danger">Connection error, the message was not sent, please try again</div>}
      </form>
    );
  }
}
