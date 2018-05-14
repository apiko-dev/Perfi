import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Card, PieChart } from '../../../../components/index';
import styles from './TransactionsChartStyles';

const TransactionsChart = ({ chartData, balance, expenses, incomes }) => (
  <Card>
    <View style={styles.chartContainerStyle}>
      <PieChart data={chartData} />
      <View style={styles.chartTextContainerStyle}>
        {!!incomes && <Text style={styles.textStyle}>+ {incomes}</Text>}
        {!!expenses && <Text style={styles.textStyle}>- {expenses}</Text>}
      </View>
    </View>
    <Text style={[styles.textStyle, styles.balanceTextStyle]}>Balance: {balance}</Text>
  </Card>
);

TransactionsChart.propTypes = {
  chartData: PropTypes.array,
  balance: PropTypes.number,
  expenses: PropTypes.number,
  incomes: PropTypes.number,
};

export default TransactionsChart;
