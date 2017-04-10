import { StackNavigator } from 'react-navigation';
import { Categories, CategoryEditor } from '../../scenes';
import scenes from '../../constants/scenes';
import navOptions from '../../utils/navOptions';

const CategoriesNavigator = StackNavigator({
  [scenes.Categories]: {
    screen: Categories,
  },
  [scenes.CategoryEditor]: {
    screen: CategoryEditor,
  },
}, {
  ...navOptions({
    title: 'Categories',
    icon: 'cards',
  }),
});

export default CategoriesNavigator;
