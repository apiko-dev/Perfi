import { Platform } from 'react-native';
import { NavIcon, PropsProxyHOC } from '../components';

const navOptions = ({ title, icon }) => ({
  navigationOptions: {
    title,
    [Platform.select({
      android: 'drawerIcon',
      ios: 'tabBarIcon',
    })]: PropsProxyHOC(NavIcon, { name: icon }),
  },
});

export default navOptions;
