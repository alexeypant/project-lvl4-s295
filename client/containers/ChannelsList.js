import { connect } from 'react-redux';
import Component from '../components/ChannelsList';
import * as actionCreators from '../actions';
import { channelsSelector } from '../selectors';

const Container = connect(
  (state) => {
    const props = {
      tasks: channelsSelector(state),
    };
    return props;
  },
  actionCreators,
)(Component);

export default Container;
