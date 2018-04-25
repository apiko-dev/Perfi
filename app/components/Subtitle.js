import React from 'react';
import T from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { fontSizes, dimensions, colors, fontWeights } from '../styles';
import { Text } from '../components';
import { formatDateForSubtitle } from '../utils/dateHelpers';

const styles = StyleSheet.create({
  leftText: {
    fontSize: fontSizes.small,
  },
  rightText: {
    fontSize: fontSizes.small,
  },
  textContainer: {
    paddingBottom: dimensions.indent,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flexDirection: 'row',
  },
  total: {
    color: colors.green,
    fontWeight: fontWeights.extraBold,
  },
  date: {
    color: colors.greyDarker,
    fontWeight: fontWeights.extraBold,

  },
});

const Subtitle = ({ style, leftText, totalBalance, date }) => (
  <View style={[styles.textContainer, style]}>
    <Text style={styles.leftText}>{leftText}</Text>
    {totalBalance &&
      <View style={styles.rightContainer}>
        <Text style={styles.rightText}>Total: </Text>
        <Text style={[styles.rightText, styles.total]}>${totalBalance}</Text>
      </View>
    }
    {date &&
      <View style={styles.rightContainer}>
        <Text style={[styles.rightText, styles.date]}>{formatDateForSubtitle(date)}</Text>
      </View>
    }

  </View>
);

Subtitle.propTypes = {
  style: ViewPropTypes.style,
  leftText: T.string,
  totalBalance: T.number,
  date: T.object,
};

export default Subtitle;
