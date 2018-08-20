import { StackNavigator } from 'react-navigation';
import CategoriesRoutes from '../routes/CategoriesRoutes';
import navOptions from '../../utils/navOptions';

const CategoriesNavigator = StackNavigator(CategoriesRoutes, {
  ...navOptions({
    title: 'Categories',
    icon: 'inbox',
  }),
});

export default CategoriesNavigator;
