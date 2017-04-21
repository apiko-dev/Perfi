import * as types from '../constants/actionTypes';
import currencies from '../constants/currencies';

const initialState = currencies[0];

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_DEFAULT_CURRENCY: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default currencyReducer;
