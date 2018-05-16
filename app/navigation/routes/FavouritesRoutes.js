import screens from '../../constants/screens';
import { Favourites, CategoryEditor } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Categories]: {
    screen: Favourites,
    navigationOptions: headerOptions({ title: 'Favourites' }),
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
};

export default Routes;
