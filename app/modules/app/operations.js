import { Font } from 'expo';
import fonts from '../../constants/fonts';
import loadImgs from '../../constants/images';
import {
  imagesLoaded,
  fontsLoaded,
} from './actions';

const loadFonts = () => async (dispatch) => {
  try {
    await Font.loadAsync(fonts);
    dispatch(fontsLoaded(true));
  } catch (error) {
    dispatch(fontsLoaded(false));
    console.log(error);
  }
};

const loadImages = () => async (dispatch) => {
  try {
    await loadImgs();
    dispatch(imagesLoaded(true));
  } catch (err) {
    dispatch(imagesLoaded(false));
    console.log(err);
  }
};

const loadAssets = () => (dispatch) => {
  dispatch(loadFonts());
  dispatch(loadImages());
};

export default {
  loadAssets,

};
