import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  expressionContainerStyle: {
    height: 48,
    padding: 8,
    backgroundColor: colors.lightGray,
  },
  expressionStyle: {
    fontSize: 24,
    textAlign: 'right',
  },
  keyboardRowStyle: {
    flexDirection: 'row',
    left: 0,
    right: 0,
  },
  keyboardShortRowStyle: {
    flex: 3,
  },
  submitButtonContainerStyle: {
    flex: 1,
  },
  submitButtonStyle: {
    height: 96,
  },
});

export default styles;
