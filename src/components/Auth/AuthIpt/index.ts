import { AppStateType } from 'store/rootReducer';
import { inputValue } from 'store/credentials/selectors';
import { connect } from 'react-redux';
import { IAuthIndex } from './types';
import AuthIpt from './AuthIpt';

const mapStateToProps = (state: AppStateType, props: IAuthIndex) => ({
  value: inputValue(state, props.page, props.type),
});

const mapDispatchToProps = (dispatch, props: IAuthIndex) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthIpt);
