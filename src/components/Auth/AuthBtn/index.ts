import { connect } from 'react-redux';
import AuthBtn from './AuthBtn';
import { signInRequest } from 'store/credentials/action';

const mapDispatchToProps = {
    signInRequest,
}

export default connect(null, mapDispatchToProps)(AuthBtn);