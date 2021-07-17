import { connect } from 'react-redux';
import { addRoom } from 'store/room/action';
import ModalButtons from './ModalButtons';

const mapDispatchToProps = (dispatch) => ({
  createRoom: (payload) => dispatch(addRoom(payload)),
});

export default connect(null, mapDispatchToProps)(ModalButtons);
