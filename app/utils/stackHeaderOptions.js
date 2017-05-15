import React from 'react';
import { Platform } from 'react-native';
import { DrawerButton } from '../components';

const headerOptions = defaultOptions => ({ navigation }) => {
  const isInitRoute = navigation.state.key === 'Init';

  return isInitRoute ? {
    ...Platform.select({
      android: {
        headerLeft: <DrawerButton navigation={navigation} />,
      },
    }),
  } : defaultOptions;
};

export default headerOptions;
