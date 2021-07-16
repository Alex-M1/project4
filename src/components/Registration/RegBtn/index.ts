import { connect } from 'react-redux';
import { signUpRequest, setIsRedirect } from 'store/user/action';
import { AppStateType } from 'store/rootReducer';
import { getIsRedirect } from 'store/user/selectors';
import RegBtn from './RegBtn';

const mapStateToProps = (state: AppStateType) => ({
  isRedirect: getIsRedirect(state),
});
const mapDispatchToProps = {
  signUpRequest,
  setIsRedirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegBtn);
