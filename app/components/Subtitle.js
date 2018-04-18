import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { fontSizes, dimensions, colors } from '../styles';
import { Text } from '../components';

const styles = StyleSheet.create({
  leftText: {
    fontSize: fontSizes.medium,
  },
  rightText: {
    fontSize: fontSizes.medium,
  },
  textContainer: {
    paddingBottom: dimensions.indent,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flexDirection: 'row',
  },
  fontColor: {
    color: colors.green,
  },
});

const Subtitle = ({ style, leftText, totalBalance }) => (
  <View style={[styles.textContainer, style]}>
    <Text style={styles.leftText}>{leftText}</Text>
    {totalBalance &&
      <View style={styles.rightContainer}>
        <Text style={styles.rightText}>Total: </Text>
        <Text style={[styles.rightText, styles.fontColor]}>{totalBalance}</Text>
      </View>
    }

  </View>
);

Subtitle.propTypes = {
  style: ViewPropTypes.style,
};

export default Subtitle;
