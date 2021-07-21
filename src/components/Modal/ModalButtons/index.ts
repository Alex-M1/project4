import { connect } from 'react-redux';
import { createRoom } from 'store/room/actions';
import { getGameType } from 'store/room/selectors';
import { AppStateType } from 'store/rootReducer';
import { getAuthData } from 'store/user/selectors';
import ModalButtons from './ModalButtons';

const mapStateToProps = (state: AppStateType) => ({
  user: getAuthData(state),
  gameType: getGameType(state),
});

const mapDispatchToProps = {
  createRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalButtons);
