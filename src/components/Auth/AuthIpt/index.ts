import { AppStateType } from 'store/rootReducer';
import { inputValue } from 'store/credentials/selectors';
import { connect } from 'react-redux';
import { setCredentialsValue } from 'store/credentials/action';
import { IAuthIndex, TDispatch } from './types';
import AuthIpt from './AuthIpt';

const mapStateToProps = (state: AppStateType, props: IAuthIndex) => ({
  value: inputValue(state, props.page, props.type),
});

const mapDispatchToProps = (dispatch: TDispatch, props: IAuthIndex) => ({
  onChange: (value: string) => dispatch(setCredentialsValue({ page: props.page, field: props.type }, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthIpt);
