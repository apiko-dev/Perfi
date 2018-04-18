import { connect } from 'react-redux';
import NavigatorView from './NavigatorView';

const NavigatorContainer = connect(({ navigator, storage, app }) => ({
  navigator,
  isReady: storage.isReady && app.isImagesLoaded && app.isFontsLoaded,
}))(NavigatorView);

export default NavigatorContainer;
