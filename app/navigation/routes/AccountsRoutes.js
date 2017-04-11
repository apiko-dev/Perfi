import scenes from '../../constants/scenes';
import { Accounts, AccountEditor } from '../../scenes';

const Routes = {
  [scenes.Accounts]: {
    screen: Accounts,
  },
  [scenes.AccountEditor]: {
    screen: AccountEditor,
  },
};

export default Routes;
