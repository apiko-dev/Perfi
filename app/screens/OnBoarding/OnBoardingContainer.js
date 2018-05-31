import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import OnBoardingScreenView from './OnBoardingScreenView';

const enhance = compose(
  withHandlers({
    onSignIn: props => () => props.signIn(),
  })
);

export default hoistStatics(enhance)(OnBoardingScreenView);
