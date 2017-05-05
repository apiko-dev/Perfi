import R from 'ramda';
import reducer from '../../app/reducers/transfersReducer';
import actionTypes from '../../app/constants/actionTypes';

describe('Transfers reducer', () => {
  const initialState = reducer(undefined, {});

  const testTransferProps = {
    value: 100,
    from: 'account#1',
    to: 'account#2',
    date: new Date(),
    note: 'someNoteId',
  };

  const getNewTransferId = (prevState, newState) => R.keys(
    R.omit(R.keys(prevState), newState),
  )[0];

  it('should return the initial state', () => {
    expect(initialState).toEqual({});
  });

  it('should add new transfer', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_TRANSFER,
      payload: testTransferProps,
    });

    expect(R.values(state)).toHaveLength(1);

    const newTransferId = getNewTransferId(initialState, state);

    expect(R.omit(['id'], state[newTransferId])).toEqual(testTransferProps);
  });

  it('should update the transfer', () => {
    const newTransferProps = {
      value: 200,
      from: 'newAccountId',
      to: 'newCategoryId',
      date: new Date(),
      note: 'newNoteId',
    };

    const state = reducer(initialState, {
      type: actionTypes.CREATE_TRANSFER,
      payload: testTransferProps,
    });

    const newTransferId = getNewTransferId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.UPDATE_TRANSFER,
      payload: { id: newTransferId, ...newTransferProps },
    });

    expect(R.values(updatedState)).toHaveLength(1);
    expect(R.omit(['id'], updatedState[newTransferId])).toEqual(newTransferProps);
  });

  it('should delete the transfer', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_TRANSFER,
      payload: testTransferProps,
    });

    const newTransferId = getNewTransferId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.DELETE_TRANSFER,
      payload: newTransferId,
    });

    expect(R.values(updatedState)).toHaveLength(0);
    expect(R.keys(updatedState)).not.toContain(newTransferId);
  });
});
