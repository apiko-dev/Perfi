import { createTransfer, updateTransfer, deleteTransfer } from './actions';


const addTransferToFavourites = id => async (dispatch, getState) => {
  const transfer = getState().transfers.byId[id];
  const updated = { ...transfer, isFavourite: true };
  dispatch(updateTransfer(updated));
};

const onDeleteTransferFromFavourites = id => async (dispatch, getState) => {
  const transfer = getState().transfers.byId[id];
  const updated = { ...transfer, isFavourite: false };
  dispatch(updateTransfer(updated));
};

export default {
  createTransfer,
  updateTransfer,
  deleteTransfer,
  addTransferToFavourites,
  onDeleteTransferFromFavourites,
};
