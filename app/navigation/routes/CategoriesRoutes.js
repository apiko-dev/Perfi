import scenes from '../../constants/scenes';
import { Categories, CategoryEditor } from '../../scenes';

const Routes = {
  [scenes.Categories]: {
    screen: Categories,
  },
  [scenes.CategoryEditor]: {
    screen: CategoryEditor,
  },
};

export default Routes;
