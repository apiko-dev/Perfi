import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginLeft: 5,
    marginRight: 5,
  },
});

const ItemWithIcon = ({ icon, iconStyle, title, titleStyle, color }) => (
  <View style={styles.rootStyle}>
    <Icon
      name={icon}
      iconStyle={[styles.iconStyle, iconStyle]}
      type="material-community"
      color={color}
    />
    <Text style={[titleStyle, { color }]}>
      {title}
    </Text>
  </View>
);

ItemWithIcon.propTypes = {
  icon: PropTypes.string,
  iconStyle: View.propTypes.style,
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
};

export default ItemWithIcon;