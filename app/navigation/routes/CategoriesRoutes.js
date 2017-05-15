import screens from '../../constants/screens';
import { Categories, CategoryEditor } from '../../screens';
import NestedTabNavigator from '../navigators/NestedTabNavigator';
import headerOptions from '../../utils/stackHeaderOptions';

const categoriesTabs = {
  [screens.CategoriesIncome]: {
    screen: Categories,
  },
  [screens.CategoriesExpense]: {
    screen: Categories,
  },
};

const Routes = {
  [screens.Categories]: {
    screen: NestedTabNavigator(categoriesTabs),
    navigationOptions: headerOptions({ title: 'Categories' }),
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
};

export default Routes;
