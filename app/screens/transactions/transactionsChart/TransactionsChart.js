import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { PieChart } from '../../../components';
import appStyles from '../../../styles/AppStyles';

const TransactionsChart = ({ expensesMap }) => (
  <View style={[appStyles.containerStyle, appStyles.withMarginTop]}>
    <PieChart data={expensesMap} />
  </View>
);

TransactionsChart.propTypes = {};

export default TransactionsChart;
