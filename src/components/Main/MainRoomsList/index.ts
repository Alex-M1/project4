import { connect } from 'react-redux';
import { getRoomList } from 'store/room/selectors';
import { AppStateType } from 'store/rootReducer';
import MainRoomsList from './MainRoomsList';

const mapStateToProps = (state: AppStateType) => ({
  rooms: getRoomList(state),
});

export default connect(mapStateToProps)(MainRoomsList);
