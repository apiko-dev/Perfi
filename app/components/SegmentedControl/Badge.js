import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import T from 'prop-types';
import { cx } from '../../styles';
import s from './styles';

const TabOption = ({
  tabBadgeContainerStyle,
  activeTabBadgeContainerStyle,
  tabBadgeStyle,
  activeTabBadgeStyle,
  badge,
  isTabActive,
}) => (
  <View
    style={[
      s.tabBadgeContainerStyle,
      tabBadgeContainerStyle,
      cx({ [isTabActive]: [s.activeTabBadgeContainerStyle, activeTabBadgeContainerStyle] }),
    ]}
  >
    <Text
      style={[
        s.tabBadgeStyle,
        tabBadgeStyle,
        cx({ [isTabActive]: [s.activeTabBadgeStyle, activeTabBadgeStyle] }),
      ]}
    >
      {badge}
    </Text>
  </View>
);

TabOption.propTypes = {
  badge: T.number,
  isTabActive: T.bool,
  tabBadgeContainerStyle: Text.propTypes.style,
  activeTabBadgeContainerStyle: Text.propTypes.style,
  tabBadgeStyle: Text.propTypes.style,
  activeTabBadgeStyle: Text.propTypes.style,
};

export default TabOption;
