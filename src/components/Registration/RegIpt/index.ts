import { AppStateType } from 'store/rootReducer';
import { inputValue } from 'store/credentials/selectors';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCredentialsValue } from 'store/credentials/action';
import { IRegIndex } from './types';
import RegIpt from './RegIpt';

const mapStateToProps = (state: AppStateType, props: IRegIndex) => ({
  value: inputValue(state, 'registration', props.type),
});

const mapDispatchToProps = (dispatch: Dispatch, props: IRegIndex) => ({
  onChange: (value: string) => dispatch(setCredentialsValue({ page: 'registration', field: props.type }, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegIpt);
