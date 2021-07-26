import { connect } from 'react-redux';
import { connectCheckersChannel } from 'store/checkers/actions';
import Checkers from './Checkers';

const mapDispatchToProps = {
  connectCheckersChannel,
};
export default connect(null, mapDispatchToProps)(Checkers);
