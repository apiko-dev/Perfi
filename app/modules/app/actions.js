import { createActions } from 'redux-actions';
import types from './types';

export const { imagesLoaded, fontsLoaded } = createActions(
  types.IMAGES_LOADED,
  types.FONTS_LOADED,
);

