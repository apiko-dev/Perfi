import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import OnBoardingScreenView from './OnBoardingScreenView';
import { settingsOperations } from '../../modules/settings';

const enhance = compose(
  connect(null, settingsOperations),
  withHandlers({
    onSignIn: props => () => props.signIn(),
  })
);

export default hoistStatics(enhance)(OnBoardingScreenView);
