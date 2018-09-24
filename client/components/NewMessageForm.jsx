import React from 'react';
import cookies from 'js-cookie';
import { Field, reduxForm } from 'redux-form';

class NewMessageForm extends React.Component {

  sendMessage = (values) => {
    // const { sendMessage, reset } = this.props;
    this.props.sendMessage(values.text);
    this.props.reset();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="newMessageForm" onSubmit={handleSubmit(this.sendMessage)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">{cookies.get('userName')}</span>
          </div>
          <Field name="text" required component="input" type="text" />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newMessage',
})(NewMessageForm);
