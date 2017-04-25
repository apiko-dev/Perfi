import * as types from '../constants/actionTypes';
import icons from '../constants/accountIcons';

const initialState = {
  name: '',
  icon: icons[0],
  initialBalance: 0,
  date: new Date(),
  isPickerVisible: false,
  isValid: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ACCOUNT_FIELD: {
      const currentState = { ...state, isPickerVisible: false, ...action.payload };
      const isValid = !!currentState.name;

      return { ...currentState, isValid };
    }

    case types.CLEAR_ACCOUNT_FORM: {
      return {
        ...initialState,
        currency: state.currency,
      };
    }

    default:
      return { ...state, isValid: !!state.name };
  }
};

export default accountReducer;
