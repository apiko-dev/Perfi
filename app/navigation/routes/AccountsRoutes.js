import screens from '../../constants/screens';
import { Accounts, AccountEditor } from '../../screens';

const Routes = {
  [screens.Accounts]: {
    screen: Accounts,
  },
  [screens.AccountEditor]: {
    screen: AccountEditor,
  },
};

export default Routes;
