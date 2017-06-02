import { Platform } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import Routes from './routes/RootRoutes';
import screens from '../constants/screens';
import colors from '../styles/colors';

const Navigator = Platform.select({
  android: DrawerNavigator,
  ios: TabNavigator,
});

const navColors = {
  activeTintColor: colors.defaultPrimary,
  inactiveTintColor: colors.secondaryText,
};

const navOptions = Platform.select({
  android: {
    contentOptions: {
      ...navColors,
    },
  },
  ios: {
    initialRouteName: screens.TransactionsRoot,
    tabBarOptions: {
      ...navColors,
    },
  },
});

export default Navigator(Routes, navOptions);
