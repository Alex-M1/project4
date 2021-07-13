import { setIsRedirect } from 'store/credentials/action';
import { connect } from 'react-redux';
import ModRedirect from './ModRedirect';

const mapDispatchToProps = {
  setIsRedirect,
};

export default connect(null, mapDispatchToProps)(ModRedirect);
