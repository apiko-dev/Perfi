import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const styles = StyleSheet.create({
  value: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: dimensions.indent,
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.extraBold,
  },
  income: {
    color: colors.green,
  },
  expense: {
    color: colors.red,
  },
  other: {
    color: colors.darkGrey,
  },
});

export default styles;
