import screens from '../../constants/screens';
import { CategoryEditor } from '../../screens';
import Categories from '../../containers/CategoriesScreenContainer';

const Routes = {
  [screens.Categories]: {
    screen: Categories,
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
};

export default Routes;
