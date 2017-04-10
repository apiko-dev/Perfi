import scenes from '../../constants/scenes';
import {
  AccountsNavigator,
  CategoriesNavigator,
  DashboardNavigator,
  SettingsNavigator,
} from '../navigators';

const Routes = {
  [scenes.DashboardRoot]: {
    screen: DashboardNavigator,
  },
  [scenes.AccountsRoot]: {
    screen: AccountsNavigator,
  },
  [scenes.CategoriesRoot]: {
    screen: CategoriesNavigator,
  },
  [scenes.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
