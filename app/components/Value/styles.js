import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const styles = StyleSheet.create({
  value: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: dimensions.indent,
    flexDirection: 'row',
  },
  valueText: {
    color: colors.green,
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.extraBold,
  },
  incomeColor: {
    color: colors.green,
  },
  expenseColor: {
    color: colors.red,
  },
  nullColor: {
    color: colors.darkGrey,
  },
});

export default styles;
