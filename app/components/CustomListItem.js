import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import colors from '../styles/colors';

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
      color: colors.secondaryText,
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
