import scenes from '../../constants/scenes';
import {
  AccountsNavigator,
  CategoriesNavigator,
  DashboardNavigator,
  SettingsNavigator,
  TrendsNavigator,
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
  [scenes.TrendsRoot]: {
    screen: TrendsNavigator,
  },
  [scenes.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
