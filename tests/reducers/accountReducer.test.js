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

  const getNewAccountId = (prevState, newState) =>
    R.keys(R.omit(R.keys(prevState.byId), newState.byId))[0];

  it('should return the initial state', () => {
    expect({
      ids: initialState.ids,
      byId: R.map(R.omit(['id', 'initialDate']), R.values(initialState.byId)),
    }).toEqual({
      byId: [{
        name: 'Card',
        icon: 'credit-card',
        balance: 0,
        initialBalance: 0,
      }, {
        name: 'Cash',
        icon: 'cash-multiple',
        balance: 0,
        initialBalance: 0,
      }],
      ids: ['0', '1'],
    });
  });

  it('should add new account', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_ACCOUNT,
      payload: testAccProps,
    });

    expect(state.ids).toHaveLength(3);

    const newAccountId = getNewAccountId(initialState, state);

    expect(R.omit(['id'], state.byId[newAccountId])).toEqual(testAccProps);
    expect(state.ids).toContain(newAccountId);
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
      payload: { id: newAccountId, ...newAccProps },
    });

    expect(R.values(updatedState.byId)).toHaveLength(3);
    expect(R.values(updatedState.ids)).toHaveLength(3);
    expect(R.omit(['id'], updatedState.byId[newAccountId])).toEqual(newAccProps);
    expect(updatedState.ids).toContain(newAccountId);
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

    expect(R.values(updatedState.byId)).toHaveLength(2);
    expect(R.values(updatedState.ids)).toHaveLength(2);
    expect(R.keys(updatedState.byId)).not.toContain(newAccountId);
    expect(updatedState.ids).not.toContain(newAccountId);
  });
});
