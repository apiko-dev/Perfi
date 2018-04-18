import screens from '../../constants/screens';
import { Categories, CategoryEditor } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Categories]: {
    screen: Categories,
    navigationOptions: headerOptions({ title: 'Categories' }),
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
};

export default Routes;
