import R from 'ramda';
import reducer from '../../app/reducers/categoriesReducer';
import actionTypes from '../../app/constants/actionTypes';
import defaultCategories from '../../app/constants/categories';

describe('Categories reducer', () => {
  const initialState = reducer(undefined, {});

  const testCategoryProps = {
    name: 'Test Category',
    icon: 'icon',
    type: 'testType',
  };

  const getNewCategoryId = (prevState, newState) =>
    R.keys(R.omit(R.keys(prevState.byId), newState.byId))[0];

  it('should return the initial state', () => {
    expect(
      R.map(R.omit(['id']), R.values(initialState.byId)),
    ).toEqual(defaultCategories);
  });

  it('should add new category', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_CATEGORY,
      payload: testCategoryProps,
    });

    expect(R.values(state.byId)).toHaveLength(3);
    expect(R.values(state.ids)).toHaveLength(3);

    const newCategoryId = getNewCategoryId(initialState, state);

    expect(R.omit(['id'], state.byId[newCategoryId])).toEqual(testCategoryProps);
  });

  it('should update the category', () => {
    const newCategoryProps = {
      name: 'New Test Category',
      icon: 'new-icon',
      type: 'newTestType',
    };

    const state = reducer(initialState, {
      type: actionTypes.CREATE_CATEGORY,
      payload: testCategoryProps,
    });

    const newCategoryId = getNewCategoryId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.UPDATE_CATEGORY,
      payload: { id: newCategoryId, ...newCategoryProps },
    });

    expect(R.values(updatedState.byId)).toHaveLength(3);
    expect(R.values(updatedState.ids)).toHaveLength(3);
    expect(R.omit(['id'], updatedState.byId[newCategoryId])).toEqual(newCategoryProps);
  });

  it('should delete the category', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_CATEGORY,
      payload: testCategoryProps,
    });

    const newCategoryId = getNewCategoryId(initialState, state);

    const updatedState = reducer(state, {
      type: actionTypes.DELETE_CATEGORY,
      payload: newCategoryId,
    });

    expect(R.values(updatedState.byId)).toHaveLength(2);
    expect(R.values(updatedState.ids)).toHaveLength(2);
    expect(R.keys(updatedState.ids)).not.toContain(newCategoryId);
    expect(updatedState.ids).not.toContain(newCategoryId);
  });
});
