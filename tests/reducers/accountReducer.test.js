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

  const getNewAccountId = (prevState, newState) => R.keys(R.omit(R.keys(prevState), newState))[0];

  it('should return the initial state', () => {
    expect(
      R.map(R.omit(['_id', 'initialDate']), R.values(initialState)),
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

    expect(R.values(state)).toHaveLength(3);

    const newAccountId = getNewAccountId(initialState, state);

    expect(R.omit(['_id'], state[newAccountId])).toEqual(testAccProps);
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

    const newAccountId = getNewAccountId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.UPDATE_ACCOUNT,
      payload: { _id: newAccountId, ...newAccProps },
    });

    expect(R.values(updatedState)).toHaveLength(3);
    expect(R.omit(['_id'], updatedState[newAccountId])).toEqual(newAccProps);
  });

  it('should delete the account', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_ACCOUNT,
      payload: testAccProps,
    });

    const newAccountId = getNewAccountId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.DELETE_ACCOUNT,
      payload: newAccountId,
    });

    expect(R.values(updatedState)).toHaveLength(2);
    expect(R.keys(updatedState)).not.toContain(newAccountId);
  });
});
