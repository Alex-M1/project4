import { connect } from 'react-redux';
import { chooseCell, doStep } from 'store/checkers/actions';
import { getFieldItem, getPossibleStepsCells } from 'store/checkers/selectors';
import { AppStateType } from 'store/rootReducer';
import Cell from './Cell';

interface IProps {
  cellNumber: number,
}

const mapStateToProps = (state: AppStateType, props: IProps) => ({
  fieldItem: getFieldItem(state, props.cellNumber),
  possibleCell: getPossibleStepsCells(state, props.cellNumber),
});

const mapDispatchToProps = {
  doStep,
  chooseCell,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
