import uuid from 'uuid';
import R from 'ramda';

export const insert = (map, item) => {
  const itemId = uuid();

  return {
    ...map,
    [itemId]: { ...item, _id: itemId },
  };
};

export const insertAll = (map, items) => R.reduce(insert, map, items);

export const remove = (map, itemId) => R.omit([itemId], map);

export const update = (map, itemId, itemProps) => {
  const item = map[itemId];

  return item ? {
    ...map,
    [itemId]: { ...item, ...itemProps },
  } : map;
};
