import { connect } from 'react-redux';
import { signUpRequest, setIsRedirect } from 'store/credentials/action';
import { AppStateType } from 'store/rootReducer';
import { isRedirect } from 'store/credentials/selectors';
import RegBtn from './RegBtn';

const mapStateToProps = (state: AppStateType) => ({
  isRedirect: isRedirect(state),
});
const mapDispatchToProps = {
  signUpRequest, setIsRedirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegBtn);
