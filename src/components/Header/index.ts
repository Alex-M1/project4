import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { leaveRoom } from 'store/room/actions';
import Header from './Header';

const mapDispatchToProps = {
  leaveRoom,
};

export default connect(null, mapDispatchToProps)(withRouter(Header));
