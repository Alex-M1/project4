import { connect } from 'react-redux';
import { addRoom } from 'store/room/action';
import { getGameType } from 'store/room/selectors';
import { AppStateType } from 'store/rootReducer';
import { getAuthData } from 'store/user/selectors';
import ModalButtons from './ModalButtons';

const mapStateToProps = (state: AppStateType) => ({
  user: getAuthData(state),
  gameType: getGameType(state),
});

const mapDispatchToProps = (dispatch) => ({
  createRoom: (payload) => dispatch(addRoom(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalButtons);
