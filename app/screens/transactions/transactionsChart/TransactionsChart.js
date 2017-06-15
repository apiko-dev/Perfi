import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { PieChart } from '../../../components';
import appStyles from '../../../styles/AppStyles';
import styles from './TransactionsChartStyles';

const TransactionsChart = ({ chartData, balance, expenses, incomes }) => (
  <View style={[appStyles.containerStyle, appStyles.withMarginTop, styles.rootStyle]}>
    <View style={styles.chartContainerStyle}>
      <PieChart data={chartData} />
      <View style={styles.chartTextContainerStyle}>
        {!!incomes && <Text style={styles.chartTextStyle}>+ {incomes}</Text>}
        {!!expenses && <Text style={styles.chartTextStyle}>- {expenses}</Text>}
      </View>
    </View>
    <Text style={styles.balanceTextStyle}>Balance: {balance}</Text>
  </View>
);

TransactionsChart.propTypes = {
  chartData: PropTypes.array,
};

export default TransactionsChart;
