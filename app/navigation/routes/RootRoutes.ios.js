import screens from '../../constants/screens';
import {
  SettingsNavigator,
  TransactionsNavigator,
  TrendsNavigator,
} from '../navigators';

const Routes = {
  [screens.TransactionsRoot]: {
    screen: TransactionsNavigator,
  },
  [screens.TrendsRoot]: {
    screen: TrendsNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
