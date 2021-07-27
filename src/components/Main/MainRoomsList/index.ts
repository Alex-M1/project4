import { connect } from 'react-redux';
import { socketConnection } from 'store/room/actions';
import { getRoomList } from 'store/room/selectors';
import { AppStateType } from 'store/rootReducer';
import { getMyOpponentGame } from 'store/ticTac/selectors';
import MainRoomsList from './MainRoomsList';

const mapStateToProps = (state: AppStateType) => ({
  rooms: getRoomList(state),
  myOpponentGame: getMyOpponentGame(state),
});

const mapDispatchToProps = {
  socketConnection,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRoomsList);
