import R from 'ramda';
import reducer from '../../app/reducers/notesReducer';
import actionTypes from '../../app/constants/actionTypes';

describe('Notes reducer', () => {
  const initialState = reducer(undefined, {});

  const testNoteProps = { text: 'test text' };

  const getNewNoteId = (prevState, newState) => R.keys(R.omit(R.keys(prevState), newState))[0];

  it('should return the initial state', () => {
    expect(initialState).toEqual({});
  });

  it('should add new note', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_NOTE,
      payload: testNoteProps,
    });

    expect(R.values(state)).toHaveLength(1);

    const newNoteId = getNewNoteId(initialState, state);

    expect(R.omit(['_id'], state[newNoteId])).toEqual(testNoteProps);
  });

  it('should update the note', () => {
    const newNoteProps = {
      text: 'new text',
    };

    const state = reducer(initialState, {
      type: actionTypes.CREATE_NOTE,
      payload: testNoteProps,
    });

    const newNoteId = getNewNoteId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.UPDATE_NOTE,
      payload: { _id: newNoteId, ...newNoteProps },
    });

    expect(R.values(updatedState)).toHaveLength(1);
    expect(R.omit(['_id'], updatedState[newNoteId])).toEqual(newNoteProps);
  });

  it('should delete the note', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_NOTE,
      payload: testNoteProps,
    });

    const newNoteId = getNewNoteId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.DELETE_NOTE,
      payload: newNoteId,
    });

    expect(R.values(updatedState)).toHaveLength(0);
    expect(R.keys(updatedState)).not.toContain(newNoteId);
  });
});
