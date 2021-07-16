import { connect } from 'react-redux';
import { AppStateType } from 'store/rootReducer';
import { getInputValue } from 'store/user/selectors';
import { setCredentialsValue } from 'store/user/action';
import RegForm from './RegForm';

export interface IRegIndex {
  type: 'login' | 'password' | 'confirm';
}

const mapStateToProps = (state: AppStateType, props: IRegIndex) => ({
  value: getInputValue(state, { page: 'registration', field: props.type }),
});

const mapDispatchToProps = {
  setCredentialsValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
