import { connect } from 'react-redux';
import { createRoom } from 'store/room/actions';
import ModalButtons from './ModalButtons';

const mapDispatchToProps = {
  createRoom,
};

export default connect(null, mapDispatchToProps)(ModalButtons);
