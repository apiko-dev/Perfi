import React from 'react';
import T from 'prop-types';
import { StyleSheet, View } from 'react-native';

const s = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  show: {
    left: 0,
    right: 0,
  },
  hide: {
    left: 90000, // over the screen,
    right: -90000, // over the screen,
  },
});

const TabContainer = ({
  selectedTabIndex,
  tabIndex,
  children,
  topOffset,
}) => (
  <View
    style={[
      s.container,
      topOffset && { top: topOffset },
      selectedTabIndex === tabIndex
? s.show
: s.hide,
    ]}
  >
    {children}
  </View>
);

TabContainer.propTypes = {
  selectedTabIndex: T.number,
  tabIndex: T.number,
  topOffset: T.number,
  children: T.element,
};

export default TabContainer;
