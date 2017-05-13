import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  containerWithIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 24,
    color: colors.gray,
  },
  inputWithIconStyle: {
    marginLeft: 10,
  },
});

export default styles;
