import { signUpRequest } from 'store/credentials/action';
import { connect } from 'react-redux';
import RegBtn from './RegBtn';

const mapDispatchToProps = {
  signUpRequest,
};

export default connect(null, mapDispatchToProps)(RegBtn);
