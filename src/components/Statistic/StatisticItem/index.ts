import { connect } from 'react-redux';
import { STATISTIC_DATA } from '../../../../__mocks__/statisticByUUID';
import StatisticItem from './StatisticItem';

const mapStateToProps = () => ({
  statistic: STATISTIC_DATA,
});

export default connect(mapStateToProps)(StatisticItem);
