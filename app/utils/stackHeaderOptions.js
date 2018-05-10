import React from 'react';
import { NavigationButton } from '../components';
import screens from '../constants/screens';

const headerOptions = defaultOptions => ({ navigation }) => {
  const isInitRoute = navigation.state.key === 'Init';

  return isInitRoute ? {
    headerLeft:
    <NavigationButton
      iconName="bars"
      onPress={() => navigation.navigate(screens.DrawerOpen)}
    />,
  } : defaultOptions;
};

export default headerOptions;
