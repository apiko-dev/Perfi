import screens from '../../constants/screens';
import {
  SettingsNavigator,
  TransactionsNavigator,
  TrendsNavigator,
} from '../navigators';

const Routes = {
  [screens.TrendsRoot]: {
    screen: TrendsNavigator,
  },
  [screens.TransactionsRoot]: {
    screen: TransactionsNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
