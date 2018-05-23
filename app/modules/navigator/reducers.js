import Navigator from '../../navigation/Navigator';
import { getResetAction } from '../../utils/navHelpers';

import screens from '../../constants/screens';
import types from './types';

const getResetState = (state, routeName) =>
  Navigator.router.getStateForAction(
    getResetAction([{ routeName }], null),
    state,
  );

const navigatorReducer = (state, action) => {
  if (action.type.startsWith('Navigation/NAVIGATE')) {
    action.key = action.routeName; // eslint-disable-line
  }

  switch (action.type) {
    case types.RESET_TO_TRANSACTION:
      console.log(types.RESET_TO_TRANSACTION, state);
      return getResetState(state, screens.Transactions);
    default:
      return Navigator.router.getStateForAction(action, state);
  }
};

export default navigatorReducer;
