import { connect } from 'react-redux';
import { chooseCell, doStep } from 'store/checkers/actions';
import { getFieldItem, getPossibleStepsCells } from 'store/checkers/selectors';
import { AppStateType } from 'store/rootReducer';
import Cell, { IProps } from './Cell';

const mapStateToProps = (state: AppStateType, { cellNumber }: IProps) => ({
  fieldItem: getFieldItem(state, cellNumber),
  possibleCell: getPossibleStepsCells(state, cellNumber),
});

const mapDispatchToProps = {
  doStep,
  chooseCell,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
