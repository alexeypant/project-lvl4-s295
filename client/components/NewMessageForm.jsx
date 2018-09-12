import React from 'react';

export default class NewMessageForm extends React.Component {
  state = {
    input: '',
  };

  render() {
    const { input } = this.state;
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            Your message
            {input}
          </span>
        </div>
        <textarea className="form-control" aria-label="With textarea" />
      </div>
    );
  }
}
