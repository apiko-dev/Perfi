import { StackNavigator } from 'react-navigation';
import { Dashboard, TransactionEditor, Categories, CategoryEditor } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';
import NestedTabNavigator from './NestedTabNavigator';


const categoriesTabs = {
  [screens.CategoriesIncome]: {
    screen: Categories,
  },
  [screens.CategoriesExpense]: {
    screen: Categories,
  },
};

const DashboardNavigator = StackNavigator({
  [screens.Dashboard]: {
    screen: Dashboard,
  },
  [screens.TransactionEditor]: {
    screen: TransactionEditor,
  },
  [screens.TransactionEditorSelectCategory]: {
    screen: NestedTabNavigator(categoriesTabs),
  },
  [screens.TransactionEditorCreateCategory]: {
    screen: CategoryEditor,
  },
}, {
  ...navOptions({
    title: 'Dashboard',
    icon: 'chart-arc',
  }),
});

export default DashboardNavigator;
