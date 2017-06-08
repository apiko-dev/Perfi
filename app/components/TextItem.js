import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  itemStyle: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    color: colors.primaryText,
  },
});

const TextItem = text => <Text style={styles.itemStyle}>{text}</Text>;

TextItem.propTypes = {
  text: PropTypes.string,
};

export default TextItem;
