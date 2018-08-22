import {
  changeCurrency,
  signIn,
  generateMockData,
  resetData,
} from './actions';


const checkSettings = () => async (dispatch, getState) => {
  // console.log("getState().settings.isSignedIn", getState().settings.isSignedIn)
  // setTimeout(() => {if (getState().settings.isSignedIn) dispatch(signIn())}, 100)
  if (getState().settings.isSignedIn) dispatch(signIn());
};

const generateData = () => (dispatch) => {
  dispatch(generateMockData());
};

export default {
  changeCurrency,
  signIn,
  checkSettings,
  generateData,
  resetData,
};
