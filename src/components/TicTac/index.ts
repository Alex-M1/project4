import { AppStateType } from 'store/rootReducer';
import { connect } from 'react-redux';
import { doStep } from 'store/ticTac/actions';
import { getSquares } from 'store/ticTac/selectors';
import TicTac from './TicTac';

const mapStateToProps = (state: AppStateType) => ({
  squares: getSquares(state),
});

const mapDispatchToProps = {
  doStep,
};
export default connect(mapStateToProps, mapDispatchToProps)(TicTac);
