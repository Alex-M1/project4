import { connect } from 'react-redux';
import { getRoomItem } from 'store/room/selectors';
import MainRoomsList from './MainRoomsList';

const mapStateToProps = (state) => ({
  rooms: getRoomItem(state),
});

export default connect(mapStateToProps, null)(MainRoomsList);
