import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  headerContainerStyle: {
    marginBottom: 20,
  },
  containerStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.black,
  },
  labelContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: colors.black,
    flex: 1,
  },
  containerBorderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.black,
  },
  headerLabelTextStyle: {
    fontWeight: '700',
  },
  textContainerStyle: {
    alignItems: 'flex-end',
    padding: 5,
  },
});

export default styles;
