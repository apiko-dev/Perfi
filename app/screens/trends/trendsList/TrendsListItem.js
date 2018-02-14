import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import appStyles from '../../../styles/AppStyles';
import styles from './TrendsListItemStyles';

const TrendsListItem = ({ label, labelBold, income = 0, expense = 0, withoutBorder }) => (
  <View style={[appStyles.rowStyle, styles.rootStyle, !withoutBorder && styles.borderStyle]}>
    <Text
      style={[appStyles.rootStyle, styles.labelStyle, labelBold && styles.boldTextStyle]}
    >
      {label}
    </Text>
    <View style={[appStyles.rootStyle, styles.totalsStyle]}>
      <Text style={styles.incomeStyle}>+{income}</Text>
      <Text style={styles.expenseStyle}>-{expense}</Text>
    </View>
  </View>
);

TrendsListItem.propTypes = {
  label: PropTypes.string,
  labelBold: PropTypes.bool,
  income: PropTypes.number,
  expense: PropTypes.number,
  withoutBorder: PropTypes.bool,
};

export default TrendsListItem;
