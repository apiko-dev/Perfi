import screens from '../../constants/screens';
import {
  AccountsNavigator,
  CategoriesNavigator,
  DashboardNavigator,
  SettingsNavigator,
  TrendsNavigator,
} from '../navigators';

const Routes = {
  [screens.DashboardRoot]: {
    screen: DashboardNavigator,
  },
  [screens.AccountsRoot]: {
    screen: AccountsNavigator,
  },
  [screens.CategoriesRoot]: {
    screen: CategoriesNavigator,
  },
  [screens.TrendsRoot]: {
    screen: TrendsNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
