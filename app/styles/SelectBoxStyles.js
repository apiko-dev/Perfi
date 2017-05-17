import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTextStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  selectWithBorderStyle: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.black,
    padding: 10,
  },
});

export default styles;
