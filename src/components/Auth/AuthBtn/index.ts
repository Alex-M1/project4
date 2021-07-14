import { connect } from 'react-redux';
import { isRedirect } from 'store/credentials/selectors';
import { signInRequest, setIsRedirect } from 'store/credentials/action';
import { AppStateType } from 'store/rootReducer';
import AuthBtn from './AuthBtn';

const mapStateToProps = (state: AppStateType) => ({
    isRedirect: isRedirect(state),
});
const mapDispatchToProps = {
    signInRequest, setIsRedirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBtn);
