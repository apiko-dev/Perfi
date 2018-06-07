import { Asset } from 'expo';

const loadImages = async () => {
  await Asset.loadAsync([
    require('../assets/icons/splash.png'),
    // require('../assets/images/add-account.png'),

  ]);
};

export default loadImages;
