import { Platform } from 'react-native';
import { NavIcon, PropsProxyHOC } from '../components';
import styles from '../styles/AppStyles';
import colors from '../styles/colors';

const navOptions = ({ title, icon }) => ({
  navigationOptions: {
    title,
    [Platform.select({
      android: 'drawerIcon',
      ios: 'tabBarIcon',
    })]: PropsProxyHOC(NavIcon, { name: icon }),
    headerStyle: styles.headerStyle,
    headerTintColor: colors.textPrimary,
  },
});

export default navOptions;
