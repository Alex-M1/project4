import { connect } from 'react-redux';
import { connectCheckersChannel, refreshField } from 'store/checkers/actions';
import Checkers from './Checkers';

const mapDispatchToProps = {
  refreshField,
  connectCheckersChannel,
};
export default connect(null, mapDispatchToProps)(Checkers);
