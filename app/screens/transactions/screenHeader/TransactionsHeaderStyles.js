import { Platform, StyleSheet } from 'react-native';

const appBarHeight = Platform.OS === 'ios' ? 44 : 56;
const statusBarHeight = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: statusBarHeight,
    backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#FFF',
    height: statusBarHeight + appBarHeight,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    elevation: 4,
  },
  headerStyle: {

  },
});

export default styles;
