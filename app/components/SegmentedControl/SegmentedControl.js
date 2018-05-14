import React from 'react';
import {
  View,
  ViewPropTypes,
  Text,
} from 'react-native';
import T from 'prop-types';
import { cx } from '../../styles';
import TabOption from './TabOption';
import s from './styles';

const handleTabPress = (index, multiple, selectedIndex, onTabPress) => {
  if (multiple) {
    onTabPress(index);
  } else if (selectedIndex !== index) {
    onTabPress(index);
  }
};

const SegmentedControlTab = ({
  multiple,
  selectedIndex,
  selectedIndices,
  values,
  badges,
  borderRadius,
  tabsContainerStyle,
  tabStyle,
  activeTabStyle,
  tabTextStyle,
  activeTabTextStyle,
  tabBadgeContainerStyle,
  activeTabBadgeContainerStyle,
  tabBadgeStyle,
  activeTabBadgeStyle,
  onTabPress,
}) => {
  const firstTabStyle = [{
    borderRightWidth: 0,
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  }];
  const lastTabStyle = [{
    borderLeftWidth: 0,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  }];

  const tabs = values.map((item, index) => {
    const firstTabStyleCx = cx({ [index === 0]: [{ borderRightWidth: 1 }, firstTabStyle] });
    const lastTabStyleCx =
      cx({ [index === values.length - 1]: [{ borderLeftWidth: 1 }, lastTabStyle] });
    const tabStyleCx = cx({ [index !== 0 && index !== values.length - 1]: { marginLeft: -2 } });

    return (
      <TabOption
        key={index} // eslint-disable-line
        index={index}
        badge={badges && badges[index] ? badges[index] : undefined}
        isTabActive={multiple ? selectedIndices.includes(index) : selectedIndex === index}
        text={item}
        onTabPress={index => handleTabPress(index, multiple, selectedIndex, onTabPress)} // eslint-disable-line
        firstTabStyle={firstTabStyleCx}
        lastTabStyle={lastTabStyleCx}
        tabStyle={[tabStyle, tabStyleCx]}
        activeTabStyle={activeTabStyle}
        tabTextStyle={tabTextStyle}
        activeTabTextStyle={activeTabTextStyle}
        tabBadgeContainerStyle={tabBadgeContainerStyle}
        activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
        tabBadgeStyle={tabBadgeStyle}
        activeTabBadgeStyle={activeTabBadgeStyle}
      />
    );
  });

  return (
    <View
      style={[s.tabsContainerStyle, tabsContainerStyle]}
      removeClippedSubviews={false}
    >
      {tabs}
    </View>
  );
};

SegmentedControlTab.propTypes = {
  values: T.array,
  badges: T.array,
  multiple: T.bool,
  onTabPress: T.func,
  selectedIndex: T.number,
  selectedIndices: T.arrayOf(T.number),
  tabsContainerStyle: ViewPropTypes.style,
  tabStyle: ViewPropTypes.style,
  activeTabStyle: ViewPropTypes.style,
  tabTextStyle: Text.propTypes.style,
  activeTabTextStyle: Text.propTypes.style,
  tabBadgeContainerStyle: Text.propTypes.style,
  activeTabBadgeContainerStyle: Text.propTypes.style,
  tabBadgeStyle: Text.propTypes.style,
  activeTabBadgeStyle: Text.propTypes.style,
  borderRadius: T.number,
};

SegmentedControlTab.defaultProps = {
  values: ['One', 'Two', 'Three'],
  badges: ['', '', ''],
  multiple: false,
  selectedIndex: 0,
  selectedIndices: [0],
  onTabPress: () => {},
  tabsContainerStyle: {},
  tabStyle: {},
  activeTabStyle: {},
  tabTextStyle: {},
  activeTabTextStyle: {},
  tabBadgeContainerStyle: {},
  activeTabBadgeContainerStyle: {},
  tabBadgeStyle: {},
  activeTabBadgeStyle: {},
  borderRadius: 5,
};

export default SegmentedControlTab;
