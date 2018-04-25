import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

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
  textStyle: {
    textAlign: 'center',
    color: colors.secondaryText,
    fontSize: 18,
  },
  balanceTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
