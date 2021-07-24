import { connect } from 'react-redux';
import { AppStateType } from 'store/rootReducer';
import { getStatistic } from 'store/statistic/action';
import { getStatisticByUuid } from 'store/statistic/selectors';
import StatisticTable from './StatisticTable';

const mapStateToProps = (state: AppStateType) => ({
  statisticData: getStatisticByUuid(state),
});
const mapDispatchToProps = {
  getStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticTable);
