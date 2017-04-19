import * as types from '../constants/actionTypes';

const initialState = {
  icon: 'wallet',
  currency: null,
  initialBalance: 0,
  date: new Date(),
  isValid: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ACCOUNT_FIELD: {
      const isValid = state.icon && state.currency && state.initialBalance && state.date;

      return { ...state, ...action.payload, isValid };
    }

    case types.CREATE_ACCOUNT_SUCCESS: {
      return {
        ...initialState,
        currency: state.currency,
      }
    }

    default:
      return state;
  }
};

export default accountReducer;
