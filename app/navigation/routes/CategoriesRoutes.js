import screens from '../../constants/screens';
import { Categories, CategoryEditor } from '../../screens';

const Routes = {
  [screens.Categories]: {
    screen: Categories,
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
};

export default Routes;
