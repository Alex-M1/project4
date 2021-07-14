import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from 'store/rootReducer';
import { getInputValue } from 'store/user/selectors';
import { setCredentialsValue } from 'store/user/action';
import { IRegIndex } from './types';
import RegForm from './RegForm';

const mapStateToProps = (state: AppStateType, props: IRegIndex) => ({
  value: getInputValue(state, 'registration', props.type),
});

const mapDispatchToProps = (dispatch: Dispatch, props: IRegIndex) => ({
  onChange: (value: string) => dispatch(setCredentialsValue({ page: 'registration', field: props.type }, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
