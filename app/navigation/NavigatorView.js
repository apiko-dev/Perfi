import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from './Navigator';

const NavigatorView = ({ dispatch, navigator }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: navigator })} />
);

NavigatorView.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object,
};

export default NavigatorView;
