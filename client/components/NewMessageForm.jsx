import React from 'react';
import axios from 'axios';
import cookies from 'js-cookie';

export default class NewMessageForm extends React.Component {
  state = {
    input: '',
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  handleButtonClick = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/api/v1/channels/0/messages',
      data: {
        data: {
          attributes: {
            text: this.state.input,
            userName: cookies.get('userName'),
          },
        },
      },
    });
    this.setState({
      input: '',
    });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="input-group">
        <form>
          <div className="row">
            <div className="col">
              <input onChange={this.handleChange} type="text" className="form-control" placeholder="your message" value={input} />
            </div>
            <div className="col">
              <button onClick={this.handleButtonClick} type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// axios({
//   method: 'post',
//   url: '/api/v1/channels',
//   data: {
//     data: {
//       attributes: {
//         name: 'oneMore',
//       },
//     },
//   },
// });
