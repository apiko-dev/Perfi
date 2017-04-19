import faker from 'faker';
import * as types from '../constants/actionTypes';

const initialState = [];

const accountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ACCOUNT: {
      const accountData = {
        id: faker.random.uuid(),
        ...action.payload,
      };

      return [...state, accountData];
    }

    case types.UPDATE_ACCOUNT: {
      return state.map((account) => {
        if (account.id === action.payload.id) {
          return {
            ...account,
            ...action.payload.data,
          };
        }

        return account;
      });
    }

    case types.DELETE_ACCOUNT: {
      return state.filter(({ id }) => id !== action.payload);
    }

    default:
      return state;
  }
};

export default accountsReducer;
