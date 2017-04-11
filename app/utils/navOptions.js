import { Platform } from 'react-native';
import { NavIcon, PropsProxyHOC } from '../components';

const navOptions = ({ title, icon }) => ({
  navigationOptions: {
    title,
    [Platform.select({ android: 'drawer', ios: 'tabBar' })]: {
      icon: PropsProxyHOC(NavIcon, { name: icon }),
    },
  },
});

export default navOptions;
