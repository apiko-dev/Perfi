import React, { PropTypes } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from './Navigator';

const NavigatorView = ({ dispatch, navigatorState }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: navigatorState })} />
);

NavigatorView.propTypes = {
  dispatch: PropTypes.func,
  navigatorState: PropTypes.object,
};

export default NavigatorView;
