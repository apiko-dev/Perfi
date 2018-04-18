import { Asset } from 'expo';

const loadImages = async () => {
  await Asset.loadAsync([
    require('../assets/icons/splash.png'),

  ]);
};

export default loadImages;
