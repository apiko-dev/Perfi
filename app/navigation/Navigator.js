import { StackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import { OnBoarding } from '../screens';
import NavigatorDrawer from './NavigatorDrawer';

const routes = {
  [screens.OnBoarding]: {
    screen: OnBoarding,
    headerMode: 'screen',
  },
  [screens.DrawerRoot]: {
    screen: NavigatorDrawer,
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
};

export default StackNavigator(routes);
