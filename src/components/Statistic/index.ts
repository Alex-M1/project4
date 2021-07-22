import { connect } from 'react-redux';
import { AppStateType } from 'store/rootReducer';
import { getStatisticByUuid } from 'store/statistic/selectors';
import Statistic from './Statistic';

const mapStateToProps = (state: AppStateType) => ({
  getStatUUID: getStatisticByUuid(state),
});

export default connect(mapStateToProps)(Statistic);
