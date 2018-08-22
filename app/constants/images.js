import { Asset } from 'expo';

const loadImages = async () => {
  await Asset.loadAsync([
    require('../assets/images/add-account.png'),
    require('../assets/images/sadSmile.png'),
    require('../assets/images/slide1.png'),
    require('../assets/images/slide2.png'),
    require('../assets/images/slide3.png'),
  ]);
};

export default loadImages;
