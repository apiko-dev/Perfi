import Navigator from '../navigation/Navigator';

const navigatorReducer = (state, action) => {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigatorReducer;
