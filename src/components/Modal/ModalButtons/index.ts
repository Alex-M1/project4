import { connect } from 'react-redux';
import { createRoom } from 'store/room/actions';
import { getGameType } from 'store/room/selectors';
import { AppStateType } from 'store/rootReducer';
import { getAuthData } from 'store/user/selectors';
import ModalButtons from './ModalButtons';


const mapDispatchToProps = {
  createRoom,
};

export default connect(null, mapDispatchToProps)(ModalButtons);
