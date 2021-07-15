import { connect } from 'react-redux';
import { getIsRedirect } from 'store/user/selectors';
import { signInRequest, setIsRedirect } from 'store/user/action';
import { AppStateType } from 'store/rootReducer';
import AuthBtn from './AuthBtn';

const mapStateToProps = (state: AppStateType) => ({
    isRedirect: getIsRedirect(state),
});
const mapDispatchToProps = {
    signInRequest,
    setIsRedirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBtn);
