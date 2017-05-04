import screens from '../../constants/screens';
import {
  DashboardNavigator,
  TrendsNavigator,
  SettingsNavigator,
} from '../navigators';

const Routes = {
  [screens.DashboardRoot]: {
    screen: DashboardNavigator,
  },
  [screens.TrendsRoot]: {
    screen: TrendsNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
