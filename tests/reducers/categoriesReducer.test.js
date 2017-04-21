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

  it('should return the initial state', () => {
    expect(
      R.map(R.omit(['_id']), initialState),
    ).toEqual(defaultCategories);
  });

  it('should add new category', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_CATEGORY,
      payload: testCategoryProps,
    });

    expect(state).toHaveLength(3);
    expect(R.omit(['_id'], state[2])).toEqual(testCategoryProps);
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

    const { _id } = R.last(state);

    const updatedState = reducer(state, {
      type: actionTypes.UPDATE_CATEGORY,
      payload: { _id, ...newCategoryProps },
    });

    expect(updatedState).toHaveLength(3);
    expect(R.omit(['_id'], updatedState[2])).toEqual(newCategoryProps);
  });

  it('should delete the account', () => {
    const state = reducer(initialState, {
      type: actionTypes.CREATE_CATEGORY,
      payload: testCategoryProps,
    });

    const newCategory = R.last(state);

    const updatedState = reducer(state, {
      type: actionTypes.DELETE_CATEGORY,
      payload: newCategory._id,
    });

    expect(updatedState).toHaveLength(2);
    expect(updatedState).not.toContain(newCategory);
  });
});
