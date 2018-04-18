import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isImagesLoaded: false,
  isFontsLoaded: false,
};

const authReducer = handleActions(
  {
    [types.IMAGES_LOADED]: (state, { payload }) => ({
      ...state,
      isImagesLoaded: payload,
    }),
    [types.FONTS_LOADED]: (state, { payload }) => ({
      ...state,
      isFontsLoaded: payload,
    }),
  },
  initialState,
);

export default authReducer;
