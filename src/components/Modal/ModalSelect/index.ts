import { connect } from 'react-redux';
import { setGameType } from 'store/room/actions';
import { getGameType } from 'store/room/selectors';
import { AppStateType } from 'store/rootReducer';
import ModalSelect from './ModalSelect';

const mapStateToProps = (state: AppStateType) => ({
  gameType: getGameType(state),
});
const mapDispatchToProps = {
  setGameType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSelect);
