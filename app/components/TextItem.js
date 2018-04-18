import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { capitalizeFirstLetter } from '../utils/stringHelper';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  itemStyle: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    color: colors.primaryText,
  },
});

const TextItem = text => (
  <Text style={styles.itemStyle}>
    {capitalizeFirstLetter(text)}
  </Text>
);

TextItem.propTypes = {
  text: PropTypes.string,
};

export default TextItem;
