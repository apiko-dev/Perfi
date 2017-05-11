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

const getHeader = (navigation, defaultHeader) => {
  const isInitRoute = navigation.state.key === 'Init';

  return isInitRoute ? {
    ...defaultHeader,
    title: 'Categories',
    ...Platform.select({
      android: {
        left: <DrawerButton navigation={navigation} />,
      },
    }),
  } : defaultHeader;
};

const Routes = {
  [screens.Categories]: {
    screen: NestedTabNavigator(categoriesTabs),
    navigationOptions: {
      header: getHeader,
    },
  },
  [screens.CategoryEditor]: {
    screen: CategoryEditor,
  },
};

export default Routes;
