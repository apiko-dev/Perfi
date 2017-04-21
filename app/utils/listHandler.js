import uuid from 'uuid';
import R from 'ramda';

export const newItem = (createItemFn, itemProps) => ({
  _id: uuid(),
  ...createItemFn(itemProps),
});

export const addItem = (items, createItemFn, itemProps) => [
  ...items,
  newItem(createItemFn, itemProps),
];

const neededItem = R.propEq('_id');

export const deleteItem = (items, itemId) => R.reject(neededItem(itemId), items);

export const updateItem = (items, itemId, itemProps) => {
  const item = R.find(neededItem(itemId), items);

  return item ? [
    ...deleteItem(items, itemId),
    R.merge(item, itemProps),
  ] : items;
};
