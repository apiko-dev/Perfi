import { connect } from 'react-redux';
import NavigatorView from './NavigatorView';

const NavigatorViewContainer = connect(state => ({
  navigatorState: state.navigator,
}))(NavigatorView);

export default NavigatorViewContainer;
