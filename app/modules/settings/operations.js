import { changeCurrency, signIn } from './actions';


const checkSettings = () => (dispatch, getState) => {
  if (getState().settings.isSignedIn) dispatch(signIn());
};

export default {
  changeCurrency,
  signIn,
  checkSettings,
};
