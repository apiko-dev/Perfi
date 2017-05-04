import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { Loading } from '../components';
import Navigator from './Navigator';

const NavigatorView = ({ dispatch, navigator, isReady }) => (
  isReady ? (
    <Navigator navigation={addNavigationHelpers({ dispatch, state: navigator })} />
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
