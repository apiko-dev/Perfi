import scenes from '../../constants/scenes';
import { DashboardNavigator, SettingsNavigator } from '../navigators';

const Routes = {
  [scenes.DashboardRoot]: {
    screen: DashboardNavigator,
  },
  [scenes.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
