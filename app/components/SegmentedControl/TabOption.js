import React from 'react';
import {
  View,
  ViewPropTypes,
  TouchableOpacity,
  Text,
} from 'react-native';
import T from 'prop-types';
import { cx } from '../../styles';
import Badge from './Badge';
import s from './styles';

const TabOption = ({
  isTabActive,
  index,
  badge,
  text,
  firstTabStyle,
  lastTabStyle,
  tabStyle,
  activeTabStyle,
  tabTextStyle,
  activeTabTextStyle,
  tabBadgeContainerStyle,
  activeTabBadgeContainerStyle,
  tabBadgeStyle,
  activeTabBadgeStyle,
  onTabPress,
}) => (
  <TouchableOpacity
    style={[
      s.tabStyle,
      tabStyle,
      cx({ [isTabActive]: [s.activeTabStyle, activeTabStyle] }),
      firstTabStyle,
      lastTabStyle,
    ]}
    onPress={() => onTabPress(index)}
    activeOpacity={1}
  >
    <View style={s.row}>
      <Text
        style={[
          s.tabTextStyle,
          tabTextStyle,
          cx({ [isTabActive]: [s.activeTabTextStyle, activeTabTextStyle] }),
        ]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {text}
      </Text>
      
      {badge && (
        <Badge
          badge={badge}
          tabBadgeContainerStyle={tabBadgeContainerStyle}
          activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
          tabBadgeStyle={tabBadgeStyle}
          activeTabBadgeStyle={activeTabBadgeStyle}
          isTabActive={isTabActive}
        />
      )}
    </View>
  </TouchableOpacity>
);

TabOption.propTypes = {
  isTabActive: T.bool,
  index: T.number,
  badge: T.number,
  text: T.string,
  firstTabStyle: ViewPropTypes.style,
  lastTabStyle: ViewPropTypes.style,
  tabStyle: ViewPropTypes.style,
  activeTabStyle: ViewPropTypes.style,
  tabTextStyle: Text.propTypes.style,
  activeTabTextStyle: Text.propTypes.style,
  tabBadgeContainerStyle: Text.propTypes.style,
  activeTabBadgeContainerStyle: Text.propTypes.style,
  tabBadgeStyle: Text.propTypes.style,
  activeTabBadgeStyle: Text.propTypes.style,
  onTabPress: T.func,
};

export default TabOption;
