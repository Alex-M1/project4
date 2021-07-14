import { setIsRedirect } from 'store/user/action';
import { connect } from 'react-redux';
import ModRedirect from './ModRedirect';

const mapDispatchToProps = {
  setIsRedirect,
};

export default connect(null, mapDispatchToProps)(ModRedirect);
