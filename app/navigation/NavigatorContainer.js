import { connect } from 'react-redux';
import Navigator from './NavigatorView';

const NavigatorContainer = connect(({ navigator, storage }) => ({
  navigator,
  isReady: storage.isReady,
}))(Navigator);

export default NavigatorContainer;
