import { AppStateType } from 'store/rootReducer';
import { connect } from 'react-redux';
import { doStep, stepWithBot, createRoomChanel } from 'store/ticTac/actions';
import { getIsGame, getSquares } from 'store/ticTac/selectors';
import TicTac from './TicTac';

const mapStateToProps = (state: AppStateType) => ({
  squares: getSquares(state),
  isGameEnd: getIsGame(state),
});

const mapDispatchToProps = {
  doStep,
  stepWithBot,
  createRoomChanel,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTac);
