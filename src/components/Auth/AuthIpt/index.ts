import { connect } from 'react-redux';

import { AppStateType } from 'store/rootReducer';
import { inputValue } from 'store/credentials/selectors';
import { setCredentialsValue } from 'store/credentials/action';
import { IAuthIndex, TDispatch } from './types';
import AuthIpt from './AuthIpt';

const mapStateToProps = (state: AppStateType, props: IAuthIndex) => ({
  value: inputValue(state, 'auth', props.type),
});

const mapDispatchToProps = (dispatch: TDispatch, props: IAuthIndex) => ({
  onChange: (value: string) => dispatch(setCredentialsValue({ page: 'auth', field: props.type }, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthIpt);
