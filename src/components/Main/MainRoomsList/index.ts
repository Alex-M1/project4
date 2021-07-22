import { connect } from 'react-redux';
import { socketConnection } from 'store/room/actions';
import { getRoomList } from 'store/room/selectors';
import { AppStateType } from 'store/rootReducer';
import MainRoomsList from './MainRoomsList';

const mapStateToProps = (state: AppStateType) => ({
  rooms: getRoomList(state),
});

const mapDispatchToProps = {
  socketConnection,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRoomsList);
