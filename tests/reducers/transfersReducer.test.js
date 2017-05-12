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
    R.omit(R.keys(prevState.byId), newState.byId),
  )[0];

  it('should return the initial state', () => {
    expect(initialState).toEqual({});
  });

  it('should add new transfer', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_TRANSFER,
      payload: testTransferProps,
    });

    expect(R.values(state.byId)).toHaveLength(1);
    expect(state.ids).toHaveLength(1);

    const newTransferId = getNewTransferId(initialState, state);
    expect(R.omit(['id'], state.byId[newTransferId])).toEqual(testTransferProps);
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

    expect(R.values(updatedState.byId)).toHaveLength(1);
    expect(R.values(updatedState.ids)).toHaveLength(1);
    expect(R.omit(['id'], updatedState.byId[newTransferId])).toEqual(newTransferProps);
    expect(updatedState.ids).toContain(newTransferId);
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

    expect(R.values(updatedState.byId)).toHaveLength(0);
    expect(R.values(updatedState.ids)).toHaveLength(0);
    expect(R.keys(updatedState.byId)).not.toContain(newTransferId);
    expect(updatedState.ids).not.toContain(newTransferId);
  });
});
