import R from 'ramda';
import reducer from '../../app/reducers/transactionsReducer';
import actionTypes from '../../app/constants/actionTypes';

describe('Transactions reducer', () => {
  const initialState = reducer(undefined, {});

  const testTransactionProps = {
    value: 100,
    account: 'someAccountId',
    category: 'someCategoryId',
    date: new Date(),
    note: 'someNoteId',
  };

  const getNewTransactionId = (prevState, newState) => R.keys(
    R.omit(R.keys(prevState), newState),
  )[0];

  it('should return the initial state', () => {
    expect(initialState).toEqual({});
  });

  it('should add new transaction', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_TRANSACTION,
      payload: testTransactionProps,
    });

    expect(R.values(state)).toHaveLength(1);

    const newTransactionId = getNewTransactionId(initialState, state);

    expect(R.omit(['_id'], state[newTransactionId])).toEqual(testTransactionProps);
  });

  it('should update the transaction', () => {
    const newTransactionProps = {
      value: 200,
      account: 'newAccountId',
      category: 'newCategoryId',
      date: new Date(),
      note: 'newNoteId',
    };

    const state = reducer(initialState, {
      type: actionTypes.CREATE_TRANSACTION,
      payload: testTransactionProps,
    });

    const newTransactionId = getNewTransactionId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.UPDATE_TRANSACTION,
      payload: { _id: newTransactionId, ...newTransactionProps },
    });

    expect(R.values(updatedState)).toHaveLength(1);
    expect(R.omit(['_id'], updatedState[newTransactionId])).toEqual(newTransactionProps);
  });

  it('should delete the transaction', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_TRANSACTION,
      payload: testTransactionProps,
    });

    const newTransactionId = getNewTransactionId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.DELETE_TRANSACTION,
      payload: newTransactionId,
    });

    expect(R.values(updatedState)).toHaveLength(0);
    expect(R.keys(updatedState)).not.toContain(newTransactionId);
  });
});
