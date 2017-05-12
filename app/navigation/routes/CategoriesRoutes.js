import React from 'react';
import { Platform } from 'react-native';
import screens from '../../constants/screens';
import { Categories, CategoryEditor } from '../../screens';
import NestedTabNavigator from '../navigators/NestedTabNavigator';
import { DrawerButton } from '../../components';

const categoriesTabs = {
  [screens.CategoriesIncome]: {
    screen: Categories,
  },
  [screens.CategoriesExpense]: {
    screen: Categories,
  },
};

const getNavOptions = ({ navigation }) => {
  const isInitRoute = navigation.state.key === 'Init';

  return isInitRoute ? {
    ...Platform.select({
      android: {
        headerLeft: <DrawerButton navigation={navigation} />,
      },
    }),
  } : {
    title: 'Categories',
  };
};

const Routes = {
  [screens.Categories]: {
    screen: NestedTabNavigator(categoriesTabs),
    navigationOptions: getNavOptions,
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
};

export default Routes;
