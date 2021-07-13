import { connect } from 'react-redux';

import { signUpRequest } from 'store/credentials/action';
import RegBtn from './RegBtn';

const mapDispatchToProps = {
  signUpRequest,
};

export default connect(null, mapDispatchToProps)(RegBtn);
