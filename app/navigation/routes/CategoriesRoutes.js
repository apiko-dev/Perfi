import screens from '../../constants/screens';
import { Categories, CategoryEditor } from '../../screens';
import NestedTabNavigator from '../navigators/NestedTabNavigator';

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
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
};

export default Routes;
