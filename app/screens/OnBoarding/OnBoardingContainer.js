import {
  compose,
  hoistStatics,
  withHandlers,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import { LayoutAnimation, UIManager } from 'react-native';
import OnBoardingScreenView from './OnBoardingScreenView';
import { settingsOperations } from '../../modules/settings';

const enhance = compose(
  connect(null, settingsOperations),
  withHandlers({
    onSignIn: props => () => props.signIn(),
  }),
  lifecycle({
    componentWillUnmount() {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

      LayoutAnimation.easeInEaseOut();
    },
  })
);

export default hoistStatics(enhance)(OnBoardingScreenView);
