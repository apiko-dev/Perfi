import { StatusBar } from 'react-native';
import { create } from 'react-native-platform-stylesheet';
import colors from './colors';

const fillAll = {
  flex: 1,
};

const styles = create({
  rootContainerStyle: {
    ...fillAll,
    android: {
      paddingTop: StatusBar.currentHeight,
    },
    backgroundColor: colors.defaultPrimary,
  },
  rootStyle: {
    ...fillAll,
    backgroundColor: colors.white,
  },
  headerStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.defaultPrimary,
  },
  containerStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconStyle: {
    fontSize: 24,
    color: colors.gray,
  },
});

export default styles;
