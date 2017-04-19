import * as types from '../constants/actionTypes';

const initialState = 'US Dollar';

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
