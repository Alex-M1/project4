import { connect } from 'react-redux';

import { AppStateType } from 'store/rootReducer';
import { getInputValue } from 'store/user/selectors';
import { setCredentialsValue } from 'store/user/action';
import AuthIpt from './AuthIpt';

export interface IAuthIndex {
  type: 'login' | 'password' | 'confirm';
  page?: 'auth' | 'registration';
}

const mapStateToProps = (state: AppStateType, props: IAuthIndex) => ({
  value: getInputValue(state, { page: 'auth', field: props.type }),
});

const mapDispatchToProps = {
  setCredentialsValue,
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthIpt);
