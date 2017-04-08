import { Platform } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import Routes from './Routes';

const Navigator = Platform.select({
  android: DrawerNavigator,
  ios: TabNavigator,
});

export default Navigator(Routes);

