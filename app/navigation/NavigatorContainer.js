import { connect } from 'react-redux';
import NavigatorView from './NavigatorView';

const NavigatorContainer = connect(({ navigator, storage }) => ({
  navigator,
  isReady: storage.isReady,
}))(NavigatorView);

export default NavigatorContainer;
