import { AppStateType } from 'store/rootReducer';
import { connect } from 'react-redux';
import { doStep, stepWithBot, createRoomChanel, stepWithOpponent, setTurn, setWinner } from 'store/ticTac/actions';
import { getIsGame, getIsMyTurn, getMyOpponentGame, getSquares, getWinner } from 'store/ticTac/selectors';
import { getRoomList } from 'store/room/selectors';
import TicTac from './TicTac';

const mapStateToProps = (state: AppStateType) => ({
  turn: getIsMyTurn(state),
  rooms: getRoomList(state),
  squares: getSquares(state),
  isGameEnd: getIsGame(state),
  winnerMessage: getWinner(state),
  myOpponentGame: getMyOpponentGame(state),
});

const mapDispatchToProps = {
  doStep,
  setTurn,
  setWinner,
  stepWithBot,
  stepWithOpponent,
  createRoomChanel,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicTac);
