import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  rootStyle: {
    backgroundColor: colors.white,
  },
  rightTitleStyle: {
    flex: 0.5,
  },
});

const CustomListItem = ({ icon, style, rightTitle, ...props }) => (
  <ListItem
    {...props}
    containerStyle={[styles.rootStyle, style]}
    rightTitle={rightTitle}
    rightTitleContainerStyle={rightTitle && styles.rightTitleStyle}
    leftIcon={{
      name: icon,
      type: 'material-community',
    }}
    hideChevron
  />
);

CustomListItem.propTypes = {
  style: PropTypes.any,
  icon: PropTypes.string,
  rightTitle: PropTypes.string,
};

export default CustomListItem;
