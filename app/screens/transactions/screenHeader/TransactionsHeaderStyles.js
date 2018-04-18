import { Platform, StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const appBarHeight = Platform.OS === 'ios' ? 44 : 56;
const statusBarHeight = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: statusBarHeight,
    height: statusBarHeight + appBarHeight,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    elevation: 4,
  },
});

export default styles;
