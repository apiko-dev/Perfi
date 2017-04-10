import scenes from '../../constants/scenes';
import {
  DashboardNavigator,
  AccountsNavigator,
  SettingsNavigator,
} from '../navigators';

const Routes = {
  [scenes.DashboardRoot]: {
    screen: DashboardNavigator,
  },
  [scenes.AccountsRoot]: {
    screen: AccountsNavigator,
  },
  [scenes.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
