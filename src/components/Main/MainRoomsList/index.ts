import { connect } from 'react-redux';
import { getRoomList } from 'store/room/selectors';
import MainRoomsList from './MainRoomsList';

const mapStateToProps = (state) => ({
  rooms: getRoomList(state),
});

export default connect(mapStateToProps, null)(MainRoomsList);
