import React from 'react';
import { DrawerButton } from '../components';

const headerOptions = defaultOptions => ({ navigation }) => {
  const isInitRoute = navigation.state.key === 'Init';

  return isInitRoute ? {
    headerLeft: <DrawerButton navigation={navigation} />,
  } : defaultOptions;
};

export default headerOptions;
