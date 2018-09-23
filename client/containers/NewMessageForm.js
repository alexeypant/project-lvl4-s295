import { connect } from 'react-redux';
import Component from '../components/NewMessageForm';
import * as actionCreators from '../actions';

const mapStateToProps = () => {
  const props = {};
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
