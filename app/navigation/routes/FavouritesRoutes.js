import screens from '../../constants/screens';
import { Favourites, CategoryEditor, TransactionDetail, TransferDetail } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Categories]: {
    screen: Favourites,
    navigationOptions: headerOptions({ title: 'Favourites' }),
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
  [screens.TransactionDetail]: {
    screen: TransactionDetail,
  },
  [screens.TransferDetail]: {
    screen: TransferDetail,
  },
};

export default Routes;
