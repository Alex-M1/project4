import { connect } from 'react-redux';
import { chooseCell } from 'store/checkers/actions';
import { getFieldItem } from 'store/checkers/selectors';
import { AppStateType } from 'store/rootReducer';
import Cell, { IProps } from './Cell';

const mapStateToProps = (state: AppStateType, { cellNumber }: IProps) => ({
  fieldItem: getFieldItem(state, cellNumber),
});

const mapDispatchToProps = {
  chooseCell,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
