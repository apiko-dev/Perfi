import scenes from '../../constants/scenes';
import {
  DashboardNavigator,
  TrendsNavigator,
  SettingsNavigator,
} from '../navigators';

const Routes = {
  [scenes.DashboardRoot]: {
    screen: DashboardNavigator,
  },
  [scenes.TrendsRoot]: {
    screen: TrendsNavigator,
  },
  [scenes.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
