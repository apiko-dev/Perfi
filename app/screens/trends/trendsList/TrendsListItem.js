import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import appStyles from '../../../styles/AppStyles';
import styles from './TrendsListItemStyles';

const TrendsListItem = ({ label, income = 0, expense = 0 }) => (
  <View style={[appStyles.rowStyle, styles.rootStyle]}>
    <Text style={[appStyles.rootStyle, styles.labelStyle]}>{label}</Text>
    <View style={[appStyles.rootStyle, styles.totalsStyle]}>
      <Text style={styles.incomeStyle}>+{income}</Text>
      <Text style={styles.expenseStyle}>-{expense}</Text>
    </View>
  </View>
);

TrendsListItem.propTypes = {
  label: PropTypes.string,
  income: PropTypes.number,
  expense: PropTypes.number,
};

export default TrendsListItem;
