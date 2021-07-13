import { connect } from 'react-redux';

import { signInRequest } from 'store/credentials/action';
import AuthBtn from './AuthBtn';

const mapDispatchToProps = {
    signInRequest,
};

export default connect(null, mapDispatchToProps)(AuthBtn);
