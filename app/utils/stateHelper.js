import R from 'ramda';
import v1 from 'uuid';

export const insert = (state, item) => {
  const { byId = {}, ids = [] } = state;
  const id = `${ids.length > 0 ? Math.max(...ids) + 1 : 0}`;

  return {
    byId: {
      ...byId,
      [id]: { id, ...item },
    },
    ids: [id, ...ids],
  };
};

export const insertWithUUID = (state, item) => {
  const { byId = {}, ids = [] } = state;
  const id = v1();

  return {
    byId: {
      ...byId,
      [id]: { id, ...item },
    },
    ids: [id, ...ids],
  };
};

export const insertAllWithUUID = (state, items) => R.reduce(insertWithUUID, state, items);

export const insertAll = (state, items) => R.reduce(insert, state, items);

export const remove = ({ byId, ids }, id) => ({
  byId: R.omit([id], byId),
  ids: R.reject(R.equals(id), ids),
});

export const removeId = ({ byId, ids }, id) => ({
  byId,
  ids: R.reject(R.equals(id), ids),
});

export const update = (state, id, props) => {
  const { byId } = state;
  const item = byId[id];

  return item ? {
    ...state,
    byId: {
      ...byId,
      [id]: { ...item, ...props },
    },
  } : state;
};
