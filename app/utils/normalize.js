import * as R from 'ramda';

export const normalizeSelector = (ids, id) => ids.map(_id => id[_id]);

export const normalizeReducer = (ids, id = 'id') =>
  (state, action) => ({
    ...state,
    [id]: {
      ...state[id],
      ...action.payload.id,
    },
    [ids]: [
      ...state[ids],
      ...action.payload.ids,
    ],
  });

export const normalize = arr => {
  let id = {};

  const ids = arr.map((item) => {
    id = {
      ...id,
      [item._id]: item,
    };
    return item._id;
  });

  return { ids, id };
};


export const update = (state, action) => {
  const { _id } = action.payload;
  const item = R.pathOr({}, ['id', _id], state);
  return ({
    ...state,
    id: {
      ...state.id,
      [_id]: {
        ...item,
        ...action.payload,
      },
    },
  });
};
