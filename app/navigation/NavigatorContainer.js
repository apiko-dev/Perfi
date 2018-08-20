import { connect } from 'react-redux';
import R from 'ramda';
import { Platform, BackHandler, ToastAndroid } from 'react-native'; //eslint-disable-line
import { NavigationActions } from 'react-navigation';
import { compose, branch, renderComponent, lifecycle, withState, withHandlers } from 'recompose';
import { AppLoading } from 'expo';
import NavigatorView from './NavigatorView';
import { isRootScreen } from '../utils/navHelpers';
import { store } from '../store';
import settingsOperations from '../modules/settings/operations';


const stateToProps = ({ navigator, app }) => ({
  navigator,
  isReady: app.isImagesLoaded && app.isFontsLoaded,
});

const enhance = compose(
  connect(stateToProps),
  withState('backTimestamp', 'setBackTimestamp', null),
  withHandlers({
    navigateBack: props => () => { // eslint-disable-line
      if (!isRootScreen(props.navigator)) {
        props.dispatch(NavigationActions.back({ key: null }));
        return true;
      }

      // otherwise show toast and handle the back button action
      const currentTime = new Date().getTime();
      const timeDiff = (currentTime - props.backTimestamp) / 1000;

      if (props.backTimestamp && timeDiff <= 1) {
        props.setBackTimestamp(null);
        return false;
      }

      props.setBackTimestamp(new Date().getTime());
      ToastAndroid.show('Press again to close the app', ToastAndroid.SHORT);
      return true;
    },
  }),
  lifecycle({
    componentDidMount() {
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this.props.navigateBack);
      }
      store.dispatch(settingsOperations.checkSettings());
    },
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress');
    },

  }),
  branch(
    R.prop('isReady'),
    renderComponent(NavigatorView),
  ),
);


export default enhance(AppLoading);
