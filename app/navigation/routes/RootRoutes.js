import screens from '../../constants/screens';
import {
  AccountsNavigator,
  CategoriesNavigator,
  SettingsNavigator,
  TransactionsNavigator,
  TrendsNavigator,
  FavouritesNavigator,
} from '../navigators';

const Routes = {
  [screens.TransactionsRoot]: {
    screen: TransactionsNavigator,
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
  [screens.FavouritesRoot]: {
    screen: FavouritesNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
