import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  rootStyle: {
    alignItems: 'center',
  },
  chartContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartTextContainerStyle: {
    position: 'absolute',
    flex: 1,
  },
  chartTextStyle: {
    textAlign: 'center',
    color: colors.primaryText,
    fontSize: 18,
  },
  balanceTextStyle: {
    color: colors.secondaryText,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
