import React from 'react';
import T from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { fontSizes, dimensions, colors, fontWeights } from '../../styles';
import { Text, Value } from '../../components';
import { formatDateForSubtitle } from '../../utils/dateHelpers';

const styles = StyleSheet.create({
  leftText: {
    fontSize: fontSizes.small,
  },
  rightText: {
    fontSize: fontSizes.small,
  },
  textContainer: {
    paddingBottom: dimensions.halfIndent,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  withoutPaddingBottom: {
    paddingBottom: 0,
  },
  withoutPadding: {
    padding: 0,
  },
  rightContainer: {
    flexDirection: 'row',
  },
  date: {
    color: colors.greyDarker,
    fontWeight: fontWeights.extraBold,

  },
});

const Subtitle = ({ style, leftText, totalBalance, date, withoutPadding }) => (
  <View style={[styles.textContainer, style, withoutPadding && styles.withoutPaddingBottom]}>
    <Text style={styles.leftText}>{leftText}</Text>
    {totalBalance ?
      <View style={styles.rightContainer}>
        <Text style={styles.rightText}>Total: </Text>
        <Value
          value={totalBalance}
          style={styles.rightText}
          containerStyle={styles.withoutPadding}
        />
      </View>
      :
      null
    }
    {date ?
      <View style={styles.rightContainer}>
        <Text style={[styles.rightText, styles.date]}>{formatDateForSubtitle(date)}</Text>
      </View>
      :
      null
    }

  </View>
);

Subtitle.propTypes = {
  style: ViewPropTypes.style,
  leftText: T.string,
  totalBalance: T.number,
  date: T.object,
  withoutPadding: T.bool,
};

export default Subtitle;
