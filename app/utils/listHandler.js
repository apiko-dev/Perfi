import uuid from 'uuid';
import R from 'ramda';

export const addItem = (items, createItemFn, newItemProps) => [
  ...items,
  { _id: uuid(), ...createItemFn(newItemProps) },
];

const neededItem = R.propEq('_id');

export const deleteItem = (items, itemId) => R.reject(neededItem(itemId), items);

export const updateItem = (items, itemId, newItemProps) => {
  const item = R.find(neededItem(itemId), items);

  return item ? [
    R.merge(item, newItemProps),
    ...deleteItem(items, itemId),
  ] : items;
};
