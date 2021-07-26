import { AppStateType } from 'store/rootReducer';
import { connect } from 'react-redux';
import { doStep, stepWithBot, createRoomChanel, stepWithOpponent, setTurn } from 'store/ticTac/actions';
import { getIsGame, getIsMyTurn, getMyOpponentGame, getSquares } from 'store/ticTac/selectors';
import { getRoomList } from 'store/room/selectors';
import TicTac from './TicTac';

const mapStateToProps = (state: AppStateType) => ({
  squares: getSquares(state),
  isGameEnd: getIsGame(state),
  rooms: getRoomList(state),
  myOpponentGame: getMyOpponentGame(state),
  isMyTurn: getIsMyTurn(state),
});

const mapDispatchToProps = {
  doStep,
  stepWithBot,
  stepWithOpponent,
  setTurn,
  createRoomChanel,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTac);
