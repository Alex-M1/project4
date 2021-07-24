import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { leaveRoom } from 'store/room/actions';
import Header from './Header';

const mapDispatchToProps = {
  leaveRoom,
};

export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
)(Header);
