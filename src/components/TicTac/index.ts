import { AppStateType } from 'store/rootReducer';
import { connect } from 'react-redux';
import { doStep, stepWithBot, createRoomChanel } from 'store/ticTac/actions';
import { getSquares } from 'store/ticTac/selectors';
import { compose } from 'redux';
import TicTac from './TicTac';
import { withGame } from '../hocs';

const mapStateToProps = (state: AppStateType) => ({
  squares: getSquares(state),
});

const mapDispatchToProps = {
  doStep,
  stepWithBot,
  createRoomChanel,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGame,
)(TicTac);
