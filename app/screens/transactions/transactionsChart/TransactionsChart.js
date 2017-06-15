import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { PieChart } from '../../../components';
import appStyles from '../../../styles/AppStyles';

const TransactionsChart = ({ expenses }) => (
  <View style={[appStyles.containerStyle, appStyles.withMarginTop]}>
    <PieChart data={expenses} />
  </View>
);

TransactionsChart.propTypes = {
  expenses: PropTypes.any,
};

export default TransactionsChart;
