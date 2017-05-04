import R from 'ramda';
import reducer from '../../app/reducers/categoriesReducer';
import actionTypes from '../../app/constants/actionTypes';
import defaultCategories from '../../app/constants/defaultCategories';

describe('Categories reducer', () => {
  const initialState = reducer(undefined, {});

  const testCategoryProps = {
    name: 'Test Category',
    icon: 'icon',
    type: 'testType',
  };

  const getNewCategoryId = (prevState, newState) => R.keys(R.omit(R.keys(prevState), newState))[0];

  it('should return the initial state', () => {
    expect(
      R.map(R.omit(['id', 'initialDate']), R.values(initialState)),
    ).toEqual(defaultCategories);
  });

  it('should add new category', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_CATEGORY,
      payload: testCategoryProps,
    });

    expect(R.values(state)).toHaveLength(3);

    const newCategoryId = getNewCategoryId(initialState, state);

    expect(R.omit(['id'], state[newCategoryId])).toEqual(testCategoryProps);
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

    expect(R.values(updatedState)).toHaveLength(3);
    expect(R.omit(['id'], updatedState[newCategoryId])).toEqual(newCategoryProps);
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

    expect(R.values(updatedState)).toHaveLength(2);
    expect(R.keys(updatedState)).not.toContain(newCategoryId);
  });
});
