import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { MenuContext } from 'react-native-popup-menu';
import { Loading } from '../components';
import Navigator from './Navigator';

const NavigatorView = ({ dispatch, navigator, isReady }) => (
  isReady ? (
    <MenuContext>
      <Navigator navigation={addNavigationHelpers({ dispatch, state: navigator })} />
    </MenuContext>
  ) : (
    <Loading
      containerStyle={StyleSheet.absoluteFill}
      size={60}
      thickness={5}
    />
  )
);

NavigatorView.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object,
  isReady: PropTypes.bool,
};

export default NavigatorView;
