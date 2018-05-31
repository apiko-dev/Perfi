import { connect } from 'react-redux';
import NavigatorView from './NavigatorView';

const NavigatorContainer = connect(({ navigator, app }) => ({
  navigator,
  isReady: app.isImagesLoaded && app.isFontsLoaded,
}))(NavigatorView);

export default NavigatorContainer;
