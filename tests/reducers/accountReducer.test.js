import R from 'ramda';
import reducer from '../../app/reducers/accountsReducer';
import actionTypes from '../../app/constants/actionTypes';

describe('Accounts reducer', () => {
  const initialState = reducer(undefined, {});
  const testAccProps = {
    name: 'Test Account',
    icon: 'icon',
    balance: 10,
    initialBalance: 5,
    initialDate: new Date(),
  };

  it('should return the initial state', () => {
    expect(
      R.map(R.omit(['_id', 'initialDate']), initialState),
    ).toEqual([
      {
        name: 'Card',
        icon: 'credit-card',
        balance: 0,
        initialBalance: 0,
      },
      {
        name: 'Cash',
        icon: 'cash-multiple',
        balance: 0,
        initialBalance: 0,
      },
    ]);
  });

  it('should add new account', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_ACCOUNT,
      payload: testAccProps,
    });

    expect(state).toHaveLength(3);
    expect(R.omit(['_id'], state[2])).toEqual(testAccProps);
  });

  it('should update the account', () => {
    const newAccProps = {
      name: 'New Test Account',
      icon: 'new-icon',
      balance: 100,
      initialBalance: 50,
      initialDate: new Date(),
    };

    const state = reducer(initialState, {
      type: actionTypes.CREATE_ACCOUNT,
      payload: testAccProps,
    });

    const { _id } = R.last(state);

    const updatedState = reducer(state, {
      type: actionTypes.UPDATE_ACCOUNT,
      payload: { _id, ...newAccProps },
    });

    expect(updatedState).toHaveLength(3);
    expect(R.omit(['_id'], updatedState[2])).toEqual(newAccProps);
  });

  it('should delete the account', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_ACCOUNT,
      payload: testAccProps,
    });

    const newAcc = R.last(state);

    const updatedState = reducer(state, {
      type: actionTypes.DELETE_ACCOUNT,
      payload: newAcc._id,
    });

    expect(updatedState).toHaveLength(2);
    expect(updatedState).not.toContain(newAcc);
  });
});
