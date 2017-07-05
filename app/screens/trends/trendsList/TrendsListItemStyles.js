import { StyleSheet } from 'react-native';
import colors, { categoryTypesColor } from '../../../styles/colors';

const styles = StyleSheet.create({
  rootStyle: {
    marginBottom: 5,
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  labelStyle: {
    fontSize: 16,
    color: colors.secondaryText,
  },
  boldTextStyle: {
    fontWeight: 'bold',
  },
  totalsStyle: {
    alignItems: 'flex-end',
  },
  incomeStyle: {
    color: categoryTypesColor.income,
  },
  expenseStyle: {
    color: categoryTypesColor.expense,
  },
});

export default styles;
