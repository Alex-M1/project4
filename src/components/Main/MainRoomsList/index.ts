import { connect } from 'react-redux';
import { redirectToRoom, socketConnection } from 'store/room/actions';
import { getRoomList, getToRoom } from 'store/room/selectors';
import { AppStateType } from 'store/rootReducer';
import { getMyOpponentGame } from 'store/ticTac/selectors';
import MainRoomsList from './MainRoomsList';

const mapStateToProps = (state: AppStateType) => ({
  rooms: getRoomList(state),
  toRoom: getToRoom(state),
  myOpponentGame: getMyOpponentGame(state),
});

const mapDispatchToProps = {
  redirectToRoom,
  socketConnection,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRoomsList);
